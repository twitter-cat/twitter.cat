import { EditorView, keymap, placeholder as cmPlaceholder, drawSelection } from "https://esm.sh/@codemirror/view@6";
import { EditorState, Compartment } from "https://esm.sh/@codemirror/state@6";
import { StreamLanguage, HighlightStyle, syntaxHighlighting } from "https://esm.sh/@codemirror/language@6";
import { autocompletion } from "https://esm.sh/@codemirror/autocomplete@6";
import { linter, forceLinting } from "https://esm.sh/@codemirror/lint@6";
import { defaultKeymap, history, historyKeymap } from "https://esm.sh/@codemirror/commands@6";
import { tags } from "https://esm.sh/@lezer/highlight@1";

const KEYWORDS = new Set(["AND", "OR", "NOT"]);

const filterLanguage = StreamLanguage.define({
  name: "filter",
  startState() {
    return { expect: "field" };
  },
  token(stream, state) {
    if (stream.eatSpace()) return null;

    if (stream.eat("(")) { state.expect = "field"; return "paren"; }
    if (stream.eat(")")) { state.expect = "field"; return "paren"; }

    if (state.expect === "field") {
      const saved = stream.pos;
      if (stream.match(/^(AND|OR|NOT)/i)) {
        if (stream.eol() || /[\s()]/.test(stream.peek())) {
          return "keyword";
        }
        stream.pos = saved;
      }
      if (stream.match(/^\w+/)) {
        state.expect = "op";
        return "variableName";
      }
    }

    if (state.expect === "op") {
      if (stream.match(/^(>=|<=|!=|[=><])/)) {
        state.expect = "value";
        return "operator";
      }
      // not an operator — reset and re-parse as field/keyword
      state.expect = "field";
      if (stream.match(/^\w+/)) {
        // could be AND/OR typed without space after value
        const word = stream.current().toUpperCase();
        if (KEYWORDS.has(word) && (stream.eol() || /[\s()]/.test(stream.peek()))) {
          return "keyword";
        }
        state.expect = "op";
        return "variableName";
      }
    }

    if (state.expect === "value") {
      if (stream.match(/^"[^"]*"/) || stream.match(/^'[^']*'/)) {
        state.expect = "field";
        return "string";
      }
      if (stream.match(/^(true|false)(?=[\s)]|$)/i)) {
        state.expect = "field";
        return "atom";
      }
      if (stream.match(/^\d+(\.\d+)?/)) {
        state.expect = "field";
        return "number";
      }
      if (stream.match(/^\S+/)) {
        state.expect = "field";
        return "string";
      }
    }

    stream.next();
    return null;
  },
});

export function createFilterEditor(container, { onChange, onSubmit, fields, getSearchType }) {
  const getCurrentFields = () => fields[getSearchType()] || fields.tweets;

  const theme = EditorView.theme({
    "&": {
      backgroundColor: "#14171a",
      color: "#e7e9ea",
      fontSize: "13px",
      fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
    },
    "&.cm-focused": {
      outline: "none",
      borderColor: "#1da1f2",
    },
    ".cm-content": {
      padding: "0px",
      caretColor: "#1da1f2",
      minHeight: "18px",
    },
    ".cm-line": {
      padding: "0",
    },
    ".cm-cursor, .cm-cursor-primary": {
      borderLeftColor: "#1da1f2",
    },
    ".cm-selectionBackground": {
      backgroundColor: "rgba(29, 161, 242, 0.3) !important",
    },
    ".cm-placeholder": {
      color: "#536471",
      fontStyle: "italic",
    },
    ".cm-scroller": {
      overflow: "auto",
    },
    ".cm-tooltip": {
      backgroundColor: "#1c2024",
      border: "1px solid #2f3336",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    },
    ".cm-tooltip-autocomplete > ul": {
      fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
      fontSize: "12px",
    },
    ".cm-tooltip-autocomplete > ul > li": {
      padding: "4px 8px",
      color: "#e7e9ea",
    },
    ".cm-tooltip-autocomplete > ul > li[aria-selected]": {
      backgroundColor: "rgba(29, 161, 242, 0.15)",
      color: "#e7e9ea",
    },
    ".cm-completionLabel": {
      color: "#e7e9ea",
    },
    ".cm-completionDetail": {
      color: "#536471",
      fontStyle: "italic",
      marginLeft: "8px",
    },
    ".cm-tooltip.cm-tooltip-lint": {
      backgroundColor: "#1c2024",
      border: "1px solid #2f3336",
      borderRadius: "8px",
    },
    ".cm-lintPoint-error::after": {
      borderBottomColor: "#f4212e",
    },
    ".cm-diagnostic-error": {
      borderLeftColor: "#f4212e",
      color: "#e7e9ea",
      padding: "4px 8px",
      fontSize: "12px",
    },
  }, { dark: true });

  const highlight = HighlightStyle.define([
    { tag: tags.keyword, color: "#1da1f2", fontWeight: "bold" },
    { tag: tags.variableName, color: "#f91880" },
    { tag: tags.operator, color: "#71767b", fontWeight: "bold" },
    { tag: tags.number, color: "#00ba7c" },
    { tag: tags.string, color: "#ffd166" },
    { tag: tags.atom, color: "#00ba7c" },
    { tag: tags.paren, color: "#71767b" },
  ]);

  function completionSource(context) {
    const word = context.matchBefore(/[a-zA-Z_]\w*/);
    if (!word && !context.explicit) return null;
    const from = word?.from ?? context.pos;
    const before = context.state.doc.sliceString(0, from).trimEnd();

    if (/\b(has_media|verified)\s*=\s*$/.test(before)) {
      return {
        from,
        options: [
          { label: "true", type: "constant" },
          { label: "false", type: "constant" },
        ],
      };
    }

    if (/\blang\s*[!=]+=?\s*$/.test(before)) {
      return {
        from,
        options: [
          { label: "en", detail: "English", type: "constant" },
          { label: "es", detail: "Spanish", type: "constant" },
          { label: "ja", detail: "Japanese", type: "constant" },
          { label: "pt", detail: "Portuguese", type: "constant" },
          { label: "fr", detail: "French", type: "constant" },
          { label: "de", detail: "German", type: "constant" },
          { label: "ko", detail: "Korean", type: "constant" },
          { label: "ar", detail: "Arabic", type: "constant" },
          { label: "ru", detail: "Russian", type: "constant" },
          { label: "zh", detail: "Chinese", type: "constant" },
          { label: "it", detail: "Italian", type: "constant" },
          { label: "tr", detail: "Turkish", type: "constant" },
          { label: "hi", detail: "Hindi", type: "constant" },
          { label: "pl", detail: "Polish", type: "constant" },
        ],
      };
    }

    // After operator on numeric field → no completions
    if (/\b\w+\s*(?:>=|<=|!=|[=><])\s*$/.test(before)) {
      return null;
    }

    // General: fields + keywords
    const options = [];
    const currentFields = getCurrentFields();
    for (const f of currentFields) {
      const opt = { label: f.value, type: "variable", detail: f.label, boost: 2 };
      if (f.boolOnly) {
        opt.apply = `${f.value} = true`;
      }
      options.push(opt);
    }
    options.push(
      { label: "AND", type: "keyword", boost: -1 },
      { label: "OR", type: "keyword", boost: -1 },
      { label: "NOT", type: "keyword", boost: -1 },
    );

    return { from, options };
  }

  const filterLint = linter(view => {
    const diagnostics = [];
    const text = view.state.doc.toString();
    if (!text.trim()) return diagnostics;

    const currentFields = getCurrentFields();
    const validNames = new Set(currentFields.map(f => f.value));

    const fieldPattern = /\b(\w+)\s*(?:>=|<=|!=|[=><])/g;
    let m;
    while ((m = fieldPattern.exec(text)) !== null) {
      const field = m[1];
      if (!validNames.has(field)) {
        diagnostics.push({
          from: m.index,
          to: m.index + field.length,
          severity: "error",
          message: `Unknown field "${field}". Available: ${currentFields.map(f => f.value).join(", ")}`,
        });
      }
    }

    return diagnostics;
  }, { delay: 300 });

  const placeholderComp = new Compartment();
  function getPlaceholderText() {
    const type = getSearchType();
    if (type === "accounts") return "followers >= 10000 AND verified = true";
    return "likes >= 1000 AND lang = en";
  }

  const view = new EditorView({
    state: EditorState.create({
      doc: "",
      extensions: [
        filterLanguage,
        theme,
        syntaxHighlighting(highlight),
        drawSelection(),
        autocompletion({
          override: [completionSource],
          activateOnTyping: true,
          icons: false,
        }),
        filterLint,
        placeholderComp.of(cmPlaceholder(getPlaceholderText())),
        history(),
        keymap.of([
          { key: "Enter", run() { onSubmit?.(); return true; } },
          { key: "Escape", run(v) { v.contentDOM.blur(); return true; } },
          ...defaultKeymap.filter(k => k.key !== "Enter"),
          ...historyKeymap,
        ]),
        // Strip newlines on paste (single-line editor)
        EditorView.domEventHandlers({
          paste(event, v) {
            const text = event.clipboardData?.getData("text/plain");
            if (text?.includes("\n")) {
              event.preventDefault();
              v.dispatch(v.state.replaceSelection(text.replace(/[\n\r]+/g, " ")));
              return true;
            }
            return false;
          },
        }),
        EditorView.updateListener.of(update => {
          if (update.docChanged) {
            onChange?.(view.state.doc.toString());
          }
        }),
      ],
    }),
    parent: container,
  });

  return {
    getValue() { return view.state.doc.toString(); },
    setValue(text) {
      view.dispatch({
        changes: { from: 0, to: view.state.doc.length, insert: text || "" },
      });
    },
    focus() { view.focus(); },
    refresh() {
      view.dispatch({
        effects: placeholderComp.reconfigure(cmPlaceholder(getPlaceholderText())),
      });
      forceLinting(view);
    },
    destroy() { view.destroy(); },
  };
}

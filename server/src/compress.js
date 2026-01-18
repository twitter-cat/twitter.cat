import { Elysia } from "elysia";

export const compression = new Elysia({ name: "compressResponses" })
  .mapResponse(async ({ request, response, set }) => {
    const isJson = typeof response === "object";
    const compressionRequested = request.headers
      .get("Accept-Encoding")
      ?.includes("zstd");

    const text = isJson
      ? JSON.stringify(response)
      : (response?.toString() ?? "");

    if (!compressionRequested || text.length < 2048) {
      return response;
    }

    set.headers["Content-Encoding"] = "zstd";

    const compressed = await Bun.zstdCompress(text, { level: 5 });

    return new Response(compressed, {
      headers: {
        "Content-Type": `${
          isJson ? "application/json" : "text/plain"
        }; charset=utf-8`,
      },
    });
  })
  .as("plugin");

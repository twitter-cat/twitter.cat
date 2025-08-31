import { brotliCompressSync } from "node:zlib";
import { Elysia } from "elysia";

export const compression = new Elysia({ name: "compressResponses" })
  .mapResponse(({ request, response, set }) => {
    const isJson = typeof response === "object";
    const compressionRequested = request.headers
      .get("Accept-Encoding")
      ?.includes("br");

    const text = isJson
      ? JSON.stringify(response)
      : (response?.toString() ?? "");

    // Only compress if content is larger than 2KB and compression is requested
    if (!compressionRequested || text.length < 2048) {
      return response;
    }

    set.headers["Content-Encoding"] = "br";

    return new Response(brotliCompressSync(Buffer.from(text, "utf8")), {
      headers: {
        "Content-Type": `${
          isJson ? "application/json" : "text/plain"
        }; charset=utf-8`,
      },
    });
  })
  .as("plugin");

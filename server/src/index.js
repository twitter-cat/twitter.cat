import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";
import { rateLimit } from "elysia-rate-limit";

import api from "./api.js";
import { compression } from "./compress";

new Elysia()
  .use(
    cors({
      origin: ["localhost:3000", "localhost:3002", "twitter.cat"],
      maxAge: 86400,
    }),
  )
  .use(compression)
  .use(
    rateLimit({
      duration: 15_000,
      max: 30,
      generator: (c) => c.headers.get("CF-Connecting-IP"),
    }),
  )
  .get("/", () => "meow :3")
  .use(api)
  .listen(process.env.PORT || 3001, () => {
    console.log(
      `              \x1b[38;2;29;161;242m+++++
   + +          ++++
  +++++           ++
++++++++   ++++   ++
+++++++++++++++++++
  ++++++++++++++++
     +++++++++++++
     +++++++++++++
     ++++++  +++++
     ++++     ++++
    +++++    +++++\x1b[0m

running on \x1b[38;2;29;161;242m\x1b[1m\x1b[4mhttp://localhost:${process.env.PORT || 3001}\x1b[0m`,
    );
  });

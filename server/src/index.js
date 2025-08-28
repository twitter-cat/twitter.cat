import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";
import { rateLimit } from "elysia-rate-limit";

import api from "./api.js";

if (!process.env.SECRET_KEY)
  throw new Error("jwt signing key not found. set it as SECRET_KEY");

new Elysia()
  .use(
    cors({
      origin: ["localhost:3000", "twitter.cat"],
    }),
  )
  .use(
    rateLimit({
      duration: 15_000,
      max: 30,
      generator: (c) => c.headers.get("CF-Connecting-IP"),
    }),
  )
  .get("/", () => ":3")
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
\nrunning on \x1b[38;2;29;161;242m\x1b[1m\x1b[4mhttp://localhost:${process.env.PORT || 3001}\x1b[0m`,
    );
  });

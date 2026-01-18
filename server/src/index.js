import { cors } from "@elysiajs/cors";
import { Elysia, file } from "elysia";

import api from "./api.js";
import cap from "./cap.js";
import { compression } from "./compress.js";
import proxy from "./proxy.js";
import stats from "./stats.js";

new Elysia()
  .use(
    cors({
      origin: ["localhost:3000", "localhost:3002", "twitter.cat"],
      maxAge: 86400,
    }),
  )
  .use(compression)
  .use(api)
  .use(stats)
  .use(proxy)
  .use(cap)
  .get("/", () => file("../client/goofygoober.html"))
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

running on \x1b[38;2;29;161;242m\x1b[1m\x1b[4mhttp://localhost:${
        process.env.PORT || 3001
      }\x1b[0m`,
    );
  });

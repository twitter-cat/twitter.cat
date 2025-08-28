import { Elysia } from "elysia";
import { checkSession, sessionApi } from "./session";

export default new Elysia().use(sessionApi).post("/query", async (ctx) => {
  if (!(await checkSession(ctx))) return "nope";

  const { body } = ctx;

  return body;
});

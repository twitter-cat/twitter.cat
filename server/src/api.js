import { Elysia } from "elysia";

export default new Elysia().post("/query", async (ctx) => {
  const { body } = ctx;

  return body;
});

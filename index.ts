import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";

new Elysia()
  .use(staticPlugin())
  .get("/", ({ set }) => {
    set.headers["content-type"] = "text/html; charset=utf-8";
    return `
  <audio controls>
    <source src="/public/spinning.mp3" type="audio/mpeg">
  </audio>`;
  })
  .listen(4000);

import { listGeneratedBlogs } from "../utils/generated-blogs";

export default defineEventHandler(async (event) => {
  const path = getRequestURL(event).pathname.replace(/\/+$/, "") || "/";
  if (path !== "/" && path !== "/blogs") return;
  event.context.publishedBlogs = await listGeneratedBlogs();
});

import { readGeneratedBlog } from "../../utils/generated-blogs";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug") || "";
  const post = await readGeneratedBlog(slug);
  if (!post) {
    throw createError({ statusCode: 404, statusMessage: "Blog not found" });
  }
  return post;
});

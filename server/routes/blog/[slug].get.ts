import { readGeneratedBlog } from "../../utils/generated-blogs";
import {
  renderBlogDocument,
  renderBlogNotFound,
} from "../../utils/blog-document";

export default defineEventHandler(async (event) => {
  const raw = getRouterParam(event, "slug") || "";
  const slug = raw.replace(/\.html$/i, "");
  if (raw.toLowerCase().endsWith(".html") && slug) {
    return sendRedirect(event, `/blog/${slug}`, 301);
  }

  setHeader(event, "content-type", "text/html; charset=utf-8");
  const post = slug ? await readGeneratedBlog(slug) : null;
  if (!post) {
    setResponseStatus(event, 404);
    return renderBlogNotFound(slug);
  }
  if (post.document) return post.html;
  return renderBlogDocument(post);
});

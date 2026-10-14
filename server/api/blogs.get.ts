import { listGeneratedBlogs } from "../utils/generated-blogs";

export default defineEventHandler(async () => {
  return listGeneratedBlogs();
});

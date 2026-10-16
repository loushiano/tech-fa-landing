export type PublishedBlogCard = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishedDate: string;
  category: string;
  readTime: string;
  icon: string;
  gradient: string;
  image: string | null;
  available: true;
};

export function usePublishedBlogs() {
  return useState<PublishedBlogCard[]>("published-blogs", () => {
    if (import.meta.server) {
      const event = useRequestEvent();
      return (
        (event?.context.publishedBlogs as PublishedBlogCard[] | undefined) ??
        []
      );
    }
    return [];
  });
}

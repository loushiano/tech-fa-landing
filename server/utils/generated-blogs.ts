import { readdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MARKER = /<!--tech-fa-blog\s*([\s\S]*?)\s*tech-fa-blog-->/;

export type GeneratedBlogSummary = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishedDate: string;
  category: string;
  readTime: string;
  icon: string;
  gradient: string;
  image: null;
  available: true;
};

export type GeneratedBlogPost = GeneratedBlogSummary & {
  html: string;
};

const GRADIENTS = [
  "bg-gradient-to-br from-blue-500 to-purple-600",
  "bg-gradient-to-br from-rose-500 to-orange-600",
  "bg-gradient-to-br from-slate-600 to-blue-700",
];

function blogDirs(): string[] {
  const fromSource = join(
    dirname(fileURLToPath(import.meta.url)),
    "../../content/blog",
  );
  return [join(process.cwd(), "content/blog"), fromSource];
}

async function readBlogFiles(): Promise<{ name: string; html: string }[]> {
  for (const dir of blogDirs()) {
    try {
      const names = (await readdir(dir)).filter((name) =>
        name.toLowerCase().endsWith(".html"),
      );
      if (!names.length) continue;
      return Promise.all(
        names.map(async (name) => ({
          name,
          html: await readFile(join(dir, name), "utf8"),
        })),
      );
    } catch {
      // Directory is not present in this runtime. Try the next location.
    }
  }

  try {
    const storage = useStorage("assets:blogs");
    const keys = (await storage.getKeys()).filter((key) =>
      key.toLowerCase().endsWith(".html"),
    );
    return Promise.all(
      keys.map(async (name) => {
        const value = await storage.getItem(name);
        const html =
          typeof value === "string"
            ? value
            : Buffer.from(value as Uint8Array).toString("utf8");
        return { name: name.split("/").pop() || name, html };
      }),
    );
  } catch {
    return [];
  }
}

function sanitizeHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<\/?(?:iframe|object|embed|link|meta)[^>]*>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/javascript:/gi, "")
    .trim();
}

function formatDate(iso: string): string {
  const parsed = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return iso;
  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function parseFile(
  name: string,
  raw: string,
  index: number,
): GeneratedBlogPost | null {
  const match = raw.match(MARKER);
  if (!match) return null;
  try {
    const meta = JSON.parse(match[1]) as {
      title?: string;
      excerpt?: string;
      publishedDate?: string;
      category?: string;
      slug?: string;
      readTime?: string;
    };
    const fileSlug = name.replace(/\.html$/i, "");
    const slug = String(meta.slug || fileSlug).trim() || fileSlug;
    const publishedDate = String(meta.publishedDate || "").slice(0, 10);
    const title = String(meta.title || slug).trim();
    return {
      slug,
      title,
      excerpt: String(meta.excerpt || title).trim(),
      date: publishedDate ? formatDate(publishedDate) : "",
      publishedDate: publishedDate || new Date().toISOString().slice(0, 10),
      category: String(meta.category || "AI & Automation").trim(),
      readTime: String(meta.readTime || "5 min read").trim(),
      icon: "✍️",
      gradient: GRADIENTS[index % GRADIENTS.length],
      image: null,
      available: true,
      html: sanitizeHtml(raw.slice(match.index! + match[0].length)),
    };
  } catch {
    return null;
  }
}

export async function listGeneratedBlogs(): Promise<GeneratedBlogSummary[]> {
  const files = await readBlogFiles();
  return files
    .map((file, index) => parseFile(file.name, file.html, index))
    .filter((post): post is GeneratedBlogPost => Boolean(post))
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate))
    .map(({ html: _html, ...summary }) => summary);
}

export async function readGeneratedBlog(
  slug: string,
): Promise<GeneratedBlogPost | null> {
  const files = await readBlogFiles();
  const posts = files
    .map((file, index) => parseFile(file.name, file.html, index))
    .filter((post): post is GeneratedBlogPost => Boolean(post));
  return posts.find((post) => post.slug === slug) ?? null;
}

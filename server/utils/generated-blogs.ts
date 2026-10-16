import { readdir, readFile, stat } from "node:fs/promises";
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
  image: string | null;
  available: true;
};

export type GeneratedBlogPost = GeneratedBlogSummary & {
  html: string;
  document: boolean;
};

const GRADIENTS = [
  "bg-gradient-to-br from-blue-500 to-purple-600",
  "bg-gradient-to-br from-rose-500 to-orange-600",
  "bg-gradient-to-br from-slate-600 to-blue-700",
];

const GRADIENT_PATTERN =
  /^bg-gradient-to-br from-[a-z]+-\d{2,3} to-[a-z]+-\d{2,3}$/;

function blogDirs(): string[] {
  const fromSource = join(
    dirname(fileURLToPath(import.meta.url)),
    "../../content/blog",
  );
  return [join(process.cwd(), "content/blog"), fromSource];
}

async function readBlogFiles(): Promise<
  { name: string; html: string; modified: string }[]
> {
  for (const dir of blogDirs()) {
    try {
      const names = (await readdir(dir)).filter((name) =>
        name.toLowerCase().endsWith(".html"),
      );
      if (!names.length) continue;
      return Promise.all(
        names.map(async (name) => {
          const filePath = join(dir, name);
          const [html, info] = await Promise.all([
            readFile(filePath, "utf8"),
            stat(filePath),
          ]);
          return {
            name,
            html,
            modified: info.mtime.toISOString().slice(0, 10),
          };
        }),
      );
    } catch {
      // Directory is not present in this runtime. Try the next location.
    }
  }

  try {
    if (typeof useStorage !== "function") return [];
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
        return {
          name: name.split("/").pop() || name,
          html,
          modified: "",
        };
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

function isHtmlDocument(html: string): boolean {
  return /^\s*(?:<!doctype html|<html[\s>])/i.test(html);
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

function textExcerpt(html: string): string {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= 180) return text;
  return `${text.slice(0, 177).trim()}...`;
}

function safeImage(value: unknown): string | null {
  const image = String(value ?? "").trim();
  if (!image.startsWith("/") || image.startsWith("//")) return null;
  return image;
}

function safeGradient(value: unknown, index: number): string {
  const gradient = String(value ?? "").trim();
  if (GRADIENT_PATTERN.test(gradient)) return gradient;
  return GRADIENTS[index % GRADIENTS.length];
}

function safeIcon(value: unknown): string {
  const icon = String(value ?? "").trim();
  if (!icon || icon.length > 8) return "✍️";
  return icon;
}

function parseFile(
  name: string,
  raw: string,
  modified: string,
  index: number,
): GeneratedBlogPost | null {
  const fileSlug = name.replace(/\.html$/i, "");
  const match = raw.match(MARKER);
  const body = match ? raw.slice(match.index! + match[0].length).trim() : raw.trim();
  if (!body) return null;

  let meta: Record<string, unknown> = {};
  if (match) {
    try {
      meta = JSON.parse(match[1]) as Record<string, unknown>;
    } catch {
      return null;
    }
  }

  const slug = String(meta.slug || fileSlug).trim() || fileSlug;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;

  const titleFromTag = body.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim();
  const descriptionFromTag = body
    .match(/<meta[^>]+name=["']description["'][^>]*>/i)?.[0]
    ?.match(/content=["']([^"']*)["']/i)?.[1]
    ?.trim();
  const title = String(meta.title || titleFromTag || slug).trim();
  const publishedDate = String(meta.publishedDate || modified || "")
    .slice(0, 10);
  const dated = /^\d{4}-\d{2}-\d{2}$/.test(publishedDate)
    ? publishedDate
    : new Date().toISOString().slice(0, 10);
  const document = isHtmlDocument(body);

  return {
    slug,
    title,
    excerpt: String(meta.excerpt || descriptionFromTag || textExcerpt(body) || title).trim(),
    date: formatDate(dated),
    publishedDate: dated,
    category: String(meta.category || "AI & Automation").trim(),
    readTime: String(meta.readTime || "5 min read").trim(),
    icon: safeIcon(meta.icon),
    gradient: safeGradient(meta.gradient, index),
    image: safeImage(meta.image),
    available: true,
    html: document ? body : sanitizeHtml(body),
    document,
  };
}

async function loadPosts(): Promise<GeneratedBlogPost[]> {
  const files = await readBlogFiles();
  return files
    .map((file, index) => parseFile(file.name, file.html, file.modified, index))
    .filter((post): post is GeneratedBlogPost => Boolean(post))
    .sort(
      (a, b) =>
        b.publishedDate.localeCompare(a.publishedDate) ||
        b.slug.localeCompare(a.slug),
    );
}

export async function listGeneratedBlogs(): Promise<GeneratedBlogSummary[]> {
  const posts = await loadPosts();
  return posts.map(({ html: _html, document: _document, ...summary }) => summary);
}

export async function readGeneratedBlog(
  slug: string,
): Promise<GeneratedBlogPost | null> {
  const posts = await loadPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

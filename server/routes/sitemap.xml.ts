import { listGeneratedBlogs } from "../utils/generated-blogs";

const STATIC_URLS = [
  {
    loc: "https://tech-fa.ca/",
    lastmod: "2026-10-13",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    loc: "https://tech-fa.ca/blogs",
    lastmod: "2026-02-09",
    changefreq: "weekly",
    priority: "0.7",
  },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default defineEventHandler(async (event) => {
  const generated = await listGeneratedBlogs();
  const newest = generated[0]?.publishedDate;
  const urls = STATIC_URLS.map((entry) =>
    entry.loc.endsWith("/blogs") && newest && newest > entry.lastmod
      ? { ...entry, lastmod: newest }
      : entry,
  ).concat(
    generated.map((post) => ({
      loc: `https://tech-fa.ca/blog/${post.slug}`,
      lastmod: post.publishedDate,
      changefreq: "monthly",
      priority: "0.6",
    })),
  );

  const body = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls.map(
      (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${escapeXml(url.lastmod)}</lastmod>
    <changefreq>${escapeXml(url.changefreq)}</changefreq>
    <priority>${escapeXml(url.priority)}</priority>
  </url>`,
    ),
    `</urlset>`,
  ].join("\n");

  setHeader(event, "content-type", "application/xml; charset=utf-8");
  setHeader(event, "cache-control", "public, max-age=0, must-revalidate");
  return body;
});

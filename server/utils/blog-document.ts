import type { GeneratedBlogPost } from "./generated-blogs";

const SITE = "https://tech-fa.ca";

const GRADIENT_CSS: Record<string, string> = {
  "bg-gradient-to-br from-blue-500 to-purple-600":
    "linear-gradient(to bottom right, #3b82f6, #9333ea)",
  "bg-gradient-to-br from-rose-500 to-orange-600":
    "linear-gradient(to bottom right, #f43f5e, #ea580c)",
  "bg-gradient-to-br from-slate-600 to-blue-700":
    "linear-gradient(to bottom right, #475569, #1d4ed8)",
  "bg-gradient-to-br from-green-500 to-teal-600":
    "linear-gradient(to bottom right, #22c55e, #0d9488)",
  "bg-gradient-to-br from-orange-500 to-red-600":
    "linear-gradient(to bottom right, #f97316, #dc2626)",
};

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function page(options: {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  image: string;
  jsonLd?: string;
  main: string;
}): string {
  const jsonLd = options.jsonLd
    ? `<script type="application/ld+json">${options.jsonLd.replace(/</g, "\\u003c")}</script>`
    : "";
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(options.title)}</title>
  <meta name="description" content="${esc(options.description)}">
  <meta name="robots" content="${esc(options.robots)}">
  <link rel="canonical" href="${esc(options.canonical)}">
  <link rel="icon" type="image/png" href="/tech-fa-icon.png">
  <meta property="og:title" content="${esc(options.title)}">
  <meta property="og:description" content="${esc(options.description)}">
  <meta property="og:image" content="${esc(options.image)}">
  <meta property="og:url" content="${esc(options.canonical)}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Tech FA">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(options.title)}">
  <meta name="twitter:description" content="${esc(options.description)}">
  <meta name="twitter:image" content="${esc(options.image)}">
  <link rel="stylesheet" href="/blog.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  ${jsonLd}
</head>
<body>
  <header class="site-header">
    <input id="nav-toggle" class="nav-toggle" type="checkbox">
    <div class="bar">
      <div class="brand-row">
        <a class="brand" href="/" aria-label="Homepage"><img src="/tech-fa-full.png" alt="Tech FA"></a>
        <nav class="desktop-nav" aria-label="Primary">
          <a href="/#solutions">Solutions</a>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#why-us">Why Us</a>
          <a href="/blogs">Blog</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
      <a class="pill desktop-cta" href="/#contact">Work with me</a>
      <label class="nav-button" for="nav-toggle" aria-label="Toggle menu"><span></span><span></span><span></span></label>
    </div>
    <nav class="mobile-nav" aria-label="Mobile">
      <a href="/#solutions">Solutions</a>
      <a href="/#how-it-works">How It Works</a>
      <a href="/#why-us">Why Us</a>
      <a href="/blogs">Blog</a>
      <a href="/#contact">Contact</a>
      <a class="pill" href="/#contact">Work with me</a>
    </nav>
  </header>
  ${options.main}
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <img src="/tech-fa-full.png" alt="Tech FA">
        <p>Ali Fawaz builds software with the newest AI technologies. Pricing is custom, based on your budget.</p>
      </div>
      <div>
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/#solutions">Solutions</a></li>
          <li><a href="/#how-it-works">How It Works</a></li>
          <li><a href="/blogs">Blog</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <p><i class="fa-solid fa-envelope"></i> ali@tech-fa.ca</p>
      </div>
    </div>
    <div class="footer-bottom">
      <div>
        <p>&copy; 2026 Afawaz Technologies Inc. All rights reserved.</p>
        <p class="fine">Tech FA is a trade name of Afawaz Technologies Inc.</p>
      </div>
      <a class="social" href="https://www.linkedin.com/company/tech-fa" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
    </div>
  </footer>
</body>
</html>
`;
}

export function renderBlogDocument(post: GeneratedBlogPost): string {
  const canonical = `${SITE}/blog/${post.slug}`;
  const image = post.image ? `${SITE}${post.image}` : `${SITE}/tech-fa-full.png`;
  const title = `${post.title} | Tech FA Blog`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(canonical)}`;
  const hero = post.image
    ? `<img src="${esc(post.image)}" alt="${esc(post.title)}">`
    : `<div class="hero-fallback" style="background:${GRADIENT_CSS[post.gradient] || GRADIENT_CSS["bg-gradient-to-br from-blue-500 to-purple-600"]}"><div><div class="hero-icon">${esc(post.icon)}</div><div>${esc(post.category)}</div></div></div>`;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    author: { "@type": "Organization", name: "Tech FA", url: SITE },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Tech FA",
      legalName: "Afawaz Technologies Inc.",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/tech-fa-full.png` },
    },
  });

  return page({
    title,
    description: post.excerpt,
    canonical,
    robots: "index, follow",
    image,
    jsonLd,
    main: `<main>
    <article class="post">
      <nav class="crumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="/blogs">Blog</a>
        <span aria-hidden="true">/</span>
        <span class="current">${esc(post.title)}</span>
      </nav>
      <header class="post-header">
        <p class="category">${esc(post.category)}</p>
        <h1>${esc(post.title)}</h1>
        <p class="meta"><span>${esc(post.date)}</span><span>${esc(post.readTime)}</span></p>
        <div class="hero">${hero}</div>
      </header>
      <div class="blog-content">${post.html}</div>
      <div class="share-row">
        <div>
          <h2>Share this article</h2>
          <p class="share-links">
            <a href="https://www.linkedin.com/company/tech-fa" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
            <a href="${esc(shareUrl)}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i> Twitter</a>
          </p>
        </div>
        <a class="back" href="/blogs">Back to Blog</a>
      </div>
      <aside class="cta">
        <h2>Ready to Automate Your Workflows?</h2>
        <p>Pricing is custom, based on your budget. I will not leave you hanging, and I will teach you how to monitor and maintain the system if you do not want to keep paying me.</p>
        <a class="pill" href="/#contact">Work with me</a>
      </aside>
    </article>
  </main>`,
  });
}

export function renderBlogNotFound(slug: string): string {
  const canonical = `${SITE}/blog/${slug || ""}`;
  return page({
    title: "Blog Post Not Found | Tech FA",
    description: "The blog post you are looking for was not found.",
    canonical,
    robots: "noindex",
    image: `${SITE}/tech-fa-full.png`,
    main: `<main class="missing">
    <h1>Blog Post Not Found</h1>
    <p>The blog post you're looking for doesn't exist or has been moved.</p>
    <a class="pill" href="/blogs">Back to Blog</a>
  </main>`,
  });
}

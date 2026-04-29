<template>
  <div class="bg-background min-h-screen">
    <!-- Header -->
    <header
      class="fixed top-0 left-0 w-full z-50 border-b border-base-300 backdrop-blur bg-background/80 shadow-sm"
    >
      <div class="container flex h-16 items-center justify-between px-4">
        <div class="flex items-center gap-6">
          <NuxtLink aria-label="Homepage" class="flex items-center gap-2" to="/">
            <img src="/tech-fa-full.png" class="h-14" alt="Tech FA" />
          </NuxtLink>
          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink
              class="text-sm font-medium text-foreground hover:text-primary transition"
              to="/#solutions"
              >Solutions</NuxtLink
            >
            <NuxtLink
              class="text-sm font-medium text-foreground hover:text-primary transition"
              to="/#how-it-works"
              >How It Works</NuxtLink
            >
            <NuxtLink
              class="text-sm font-medium text-foreground hover:text-primary transition"
              to="/#why-us"
              >Why Us</NuxtLink
            >
            <NuxtLink
              class="text-sm font-medium text-foreground hover:text-primary transition"
              to="/blogs"
              >Blog</NuxtLink
            >
            <NuxtLink
              class="text-sm font-medium text-foreground hover:text-primary transition"
              to="/#contact"
              >Contact</NuxtLink
            >
          </nav>
        </div>
        <div class="hidden md:flex items-center gap-4">
          <NuxtLink
            class="inline-flex items-center justify-center whitespace-nowrap transition-colors bg-primary text-primary-content shadow-sm hover:bg-primary-focus h-10 px-6 rounded-full text-sm font-semibold"
            to="/#contact"
            >Get Started Free</NuxtLink
          >
        </div>
        <button
          class="p-2 md:hidden"
          aria-label="Toggle menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg
            v-if="!mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 12h18"></path>
            <path d="M3 18h18"></path>
            <path d="M3 6h18"></path>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6L6 18"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-background border-t border-base-300"
      >
        <nav class="flex flex-col p-4 gap-4">
          <NuxtLink
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            to="/#solutions"
            @click="mobileMenuOpen = false"
            >Solutions</NuxtLink
          >
          <NuxtLink
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            to="/#how-it-works"
            @click="mobileMenuOpen = false"
            >How It Works</NuxtLink
          >
          <NuxtLink
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            to="/#why-us"
            @click="mobileMenuOpen = false"
            >Why Us</NuxtLink
          >
          <NuxtLink
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            to="/blogs"
            @click="mobileMenuOpen = false"
            >Blog</NuxtLink
          >
          <NuxtLink
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            to="/#contact"
            @click="mobileMenuOpen = false"
            >Contact</NuxtLink
          >
          <NuxtLink
            class="inline-flex items-center justify-center bg-primary text-primary-content shadow-sm hover:bg-primary-focus h-10 px-6 rounded-full text-sm font-semibold mt-2"
            to="/#contact"
            @click="mobileMenuOpen = false"
            >Get Started Free</NuxtLink
          >
        </nav>
      </div>
    </header>

    <!-- Blog Content -->
    <article class="pt-24 pb-16" v-if="blog">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Breadcrumb -->
          <nav class="mb-8">
            <div
              class="flex items-center space-x-2 text-sm text-muted-foreground"
            >
              <NuxtLink to="/" class="hover:text-primary transition"
                >Home</NuxtLink
              >
              <svg
                class="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <NuxtLink to="/blogs" class="hover:text-primary transition"
                >Blog</NuxtLink
              >
              <svg
                class="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span class="text-foreground truncate max-w-xs">{{
                blog.title
              }}</span>
            </div>
          </nav>

          <!-- Article Header -->
          <header class="mb-12">
            <div class="mb-6">
              <span
                class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
              >
                {{ blog.category }}
              </span>
            </div>

            <h1
              class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              {{ blog.title }}
            </h1>

            <div
              class="flex items-center space-x-6 text-muted-foreground mb-8"
            >
              <div class="flex items-center space-x-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{{ blog.date }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{{ blog.readTime }}</span>
              </div>
            </div>

            <!-- Hero Image -->
            <div
              class="h-72 sm:h-96 rounded-2xl relative overflow-hidden mb-12 border border-base-300"
              :class="!blog.image ? blog.gradient : ''"
            >
              <img
                v-if="blog.image"
                :src="blog.image"
                :alt="blog.title"
                class="w-full h-full object-cover"
              />
              <div
                v-else
                class="absolute inset-0 flex items-center justify-center"
              >
                <div class="text-center text-white">
                  <div class="text-6xl mb-4">{{ blog.icon }}</div>
                  <div class="text-lg font-medium opacity-90">
                    {{ blog.category }}
                  </div>
                </div>
              </div>
            </div>
          </header>

          <!-- Article Content -->
          <div class="blog-content">
            <component :is="blog.content" />
          </div>

          <!-- Share & Back -->
          <div class="border-t border-base-300 pt-8 mt-12">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-semibold text-foreground mb-2">
                  Share this article
                </h3>
                <div class="flex items-center space-x-4">
                  <a
                    class="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    target="_blank"
                    href="https://www.linkedin.com/company/tech-fa"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
                  <button
                    class="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <i class="fa-brands fa-twitter"></i>
                    <span>Twitter</span>
                  </button>
                </div>
              </div>

              <NuxtLink
                to="/blogs"
                class="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                <span>Back to Blog</span>
              </NuxtLink>
            </div>
          </div>

          <!-- CTA -->
          <div
            class="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
          >
            <h3 class="text-2xl font-bold text-foreground mb-3">
              Ready to Automate Your Workflows?
            </h3>
            <p class="text-muted-foreground mb-6 max-w-lg mx-auto">
              We implement AI automation for your business for free. You only
              pay per usage.
            </p>
            <NuxtLink
              to="/#contact"
              class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-content font-semibold hover:bg-primary-focus transition-colors"
            >
              Get Started Free
            </NuxtLink>
          </div>
        </div>
      </div>
    </article>

    <!-- 404 State -->
    <div v-else class="pt-32 pb-20 text-center">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <h1 class="text-4xl font-bold text-foreground mb-4">
            Blog Post Not Found
          </h1>
          <p class="text-xl text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <NuxtLink
            to="/blogs"
            class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-content font-semibold hover:bg-primary-focus transition-colors"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Blog
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer
      class="bg-base-100 text-base-content py-16 border-t border-base-300"
    >
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <img src="/tech-fa-full.png" class="h-14" alt="Tech FA" />
            </div>
            <p
              class="text-sm text-muted-foreground leading-relaxed max-w-md"
            >
              We automate your business workflows using the newest AI
              technologies. Free implementation, pay only per usage.
            </p>
          </div>

          <div>
            <h4 class="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/#solutions"
                  class="text-muted-foreground hover:text-primary transition"
                  >Solutions</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/#how-it-works"
                  class="text-muted-foreground hover:text-primary transition"
                  >How It Works</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/blogs"
                  class="text-muted-foreground hover:text-primary transition"
                  >Blog</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/#contact"
                  class="text-muted-foreground hover:text-primary transition"
                  >Contact</NuxtLink
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-foreground font-semibold mb-4">Contact</h4>
            <ul class="space-y-2">
              <li class="text-muted-foreground">
                <i class="fa-solid fa-envelope mr-2"></i>
                ali@tech-fa.ca
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-base-300 mt-12 pt-8">
          <div
            class="flex flex-col md:flex-row justify-between items-center"
          >
            <p class="text-sm mb-4 md:mb-0 text-muted-foreground">
              &copy; 2026 Tech FA. All rights reserved.
            </p>
            <div class="flex space-x-4">
              <a
                href="#"
                class="w-10 h-10 bg-base-200 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
                ><i
                  class="fab fa-twitter text-muted-foreground hover:text-primary-content"
                ></i
              ></a>
              <a
                href="https://www.linkedin.com/company/tech-fa"
                class="w-10 h-10 bg-base-200 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
                ><i
                  class="fab fa-linkedin text-muted-foreground hover:text-primary-content"
                ></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Blog1 from "~/components/blog1.vue";
import BlogMechanics from "~/components/blogMechanics.vue";
import BlogRestaurants from "~/components/blogRestaurants.vue";

const mobileMenuOpen = ref(false);
const route = useRoute();
const slug = route.params.slug;

const blogs = {
  "benefits-of-ai-automation-for-restaurants": {
    id: 2,
    slug: "benefits-of-ai-automation-for-restaurants",
    title: "How AI Automation Helps Restaurants Serve Guests Faster",
    excerpt:
      "See how AI call, email, review, and social messaging assistants help restaurants capture reservations, answer guests, and protect their reputation.",
    date: "April 29, 2026",
    publishedDate: "2026-04-29",
    category: "Industry Solutions",
    readTime: "4 min read",
    image: null,
    icon: "🍽️",
    gradient: "bg-gradient-to-br from-rose-500 to-orange-600",
    content: BlogRestaurants,
  },
  "benefits-of-ai-automation-for-mechanics": {
    id: 3,
    slug: "benefits-of-ai-automation-for-mechanics",
    title: "How AI Automation Helps Mechanics Book More Repair Jobs",
    excerpt:
      "Learn how auto shops can use AI assistants to answer missed calls, qualify repair requests, respond to reviews, and turn messages into appointments.",
    date: "April 29, 2026",
    publishedDate: "2026-04-29",
    category: "Industry Solutions",
    readTime: "4 min read",
    image: null,
    icon: "🔧",
    gradient: "bg-gradient-to-br from-slate-600 to-blue-700",
    content: BlogMechanics,
  },
  "smart-software-solutions-backbone-modern-business": {
    id: 1,
    slug: "smart-software-solutions-backbone-modern-business",
    title:
      "Why Smart Software Solutions Are the Backbone of Modern Business",
    excerpt:
      "Real problems companies face every day — slow workflows, costly errors, and disconnected systems.",
    date: "January 11, 2025",
    publishedDate: "2025-01-11",
    category: "AI & Automation",
    readTime: "3 min read",
    image: "/blog-1.png",
    icon: "🧠",
    gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
    content: Blog1,
  },
};

const blog = computed(() => blogs[slug] || null);

useSeoMeta({
  title: blog.value
    ? `${blog.value.title} | Tech FA Blog`
    : "Blog Post Not Found | Tech FA",
  ogTitle: blog.value
    ? `${blog.value.title} | Tech FA Blog`
    : "Blog Post Not Found",
  description: blog.value
    ? blog.value.excerpt
    : "The blog post you are looking for was not found.",
  ogDescription: blog.value ? blog.value.excerpt : "Blog post not found",
  ogImage: blog.value?.image || "/tech-fa-full.png",
  ogUrl: `https://tech-fa.ca/blog/${slug}`,
  ogType: "article",
  ogSiteName: "Tech FA",
  twitterCard: "summary_large_image",
  twitterTitle: blog.value
    ? `${blog.value.title} | Tech FA Blog`
    : "Blog Post Not Found",
  twitterDescription: blog.value ? blog.value.excerpt : "Blog post not found",
  robots: blog.value ? "index, follow" : "noindex",
});

useHead({
  htmlAttrs: { lang: "en" },
  link: [
    {
      rel: "canonical",
      href: `https://tech-fa.ca/blog/${slug}`,
    },
  ],
});

if (blog.value) {
  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: blog.value.title,
          description: blog.value.excerpt,
          datePublished: blog.value.publishedDate,
          author: {
            "@type": "Organization",
            name: "Tech FA",
            url: "https://tech-fa.ca",
          },
          publisher: {
            "@type": "Organization",
            name: "Tech FA",
            url: "https://tech-fa.ca",
            logo: {
              "@type": "ImageObject",
              url: "https://tech-fa.ca/tech-fa-full.png",
            },
          },
        }),
      },
    ],
  });
}
</script>

<style scoped>
.blog-content :deep(h2) {
  color: var(--color-foreground);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.blog-content :deep(h3) {
  color: var(--color-foreground);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.blog-content :deep(p) {
  color: var(--color-muted-foreground);
  margin-bottom: 1rem;
  line-height: 1.75;
}

.blog-content :deep(a) {
  color: var(--color-primary);
}

.blog-content :deep(.border-l-4) {
  border-color: var(--color-primary);
}

.blog-content :deep(.bg-neutral-50) {
  background-color: var(--color-base-100);
}
</style>

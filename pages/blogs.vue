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
              class="text-sm font-semibold text-primary"
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
            class="text-sm font-semibold text-primary py-2"
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

    <!-- Hero Section -->
    <section class="pt-28 pb-16 bg-base-100 relative overflow-hidden">
      <div
        class="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
      ></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <span
            class="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            >Our Blog</span
          >
          <h1
            class="text-4xl sm:text-5xl font-bold text-foreground mb-6"
          >
            AI &amp; Automation Insights
          </h1>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay ahead with the latest trends, insights, and practical advice on
            AI-powered business automation.
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <NuxtLink
              v-for="blog in blogs"
              :key="blog.slug"
              :to="blog.available ? `/blog/${blog.slug}` : undefined"
              :class="[
                'group rounded-2xl border border-base-300 overflow-hidden transition-all duration-300',
                blog.available
                  ? 'bg-background hover:shadow-lg cursor-pointer'
                  : 'bg-base-100 opacity-80 cursor-default',
              ]"
            >
              <div
                class="h-56 relative overflow-hidden"
                :class="blog.gradient"
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
                    <div class="text-5xl mb-3">{{ blog.icon }}</div>
                    <div class="text-sm font-medium opacity-90">
                      {{ blog.category }}
                    </div>
                  </div>
                </div>
                <div class="absolute top-4 left-4">
                  <span
                    class="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {{ blog.category }}
                  </span>
                </div>
              </div>

              <div class="p-6">
                <h2
                  class="text-xl font-bold text-foreground mb-3 line-clamp-2"
                  :class="{
                    'group-hover:text-primary transition-colors': blog.available,
                  }"
                >
                  {{ blog.title }}
                </h2>

                <p
                  class="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3"
                >
                  {{ blog.excerpt }}
                </p>

                <div class="flex items-center justify-between">
                  <div
                    class="flex items-center space-x-2 text-sm text-muted-foreground"
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{{ blog.date }}</span>
                  </div>
                  <span
                    v-if="blog.available"
                    class="text-primary font-medium text-sm flex items-center space-x-1 group-hover:underline"
                  >
                    <span>Read More</span>
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <span
                    v-else
                    class="text-muted-foreground font-medium text-sm"
                    >Coming Soon</span
                  >
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Newsletter Signup -->
          <div
            class="mt-16 bg-base-100 rounded-2xl p-8 border border-base-300 text-center"
          >
            <h3 class="text-2xl font-bold text-foreground mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest AI and automation insights delivered directly to
              your inbox. No spam, just valuable content to help grow your
              business.
            </p>

            <div
              v-if="subscriptionStatus.message"
              class="mb-6 max-w-md mx-auto"
            >
              <div
                :class="[
                  'p-4 rounded-lg text-sm',
                  subscriptionStatus.success
                    ? 'bg-success/10 text-success border border-success/20'
                    : 'bg-error/10 text-error border border-error/20',
                ]"
              >
                {{ subscriptionStatus.message }}
              </div>
            </div>

            <form
              @submit.prevent="handleSubscription"
              class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                v-model="subscriptionEmail"
                type="email"
                required
                placeholder="Enter your email"
                class="flex-1 px-4 py-3 bg-background border border-base-300 rounded-xl text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
              />
              <button
                type="submit"
                :disabled="isSubscribing"
                class="px-6 py-3 rounded-xl bg-primary text-primary-content hover:bg-primary-focus transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubscribing ? "Subscribing..." : "Subscribe" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

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
                  to="/#why-us"
                  class="text-muted-foreground hover:text-primary transition"
                  >Why Us</NuxtLink
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
import { ref } from "vue";

useSeoMeta({
  title: "Blog | Tech FA - AI & Business Automation Insights",
  ogTitle: "Blog | Tech FA - AI & Business Automation Insights",
  description:
    "Stay ahead with the latest trends, insights, and practical advice on AI-powered business automation, workflow optimization, and digital transformation.",
  ogDescription:
    "AI trends, automation strategies, and practical advice for modern businesses from Tech FA.",
  ogImage: "/tech-fa-full.png",
  ogUrl: "https://tech-fa.ca/blogs",
  ogType: "website",
  ogSiteName: "Tech FA",
  twitterCard: "summary_large_image",
  twitterTitle: "Blog | Tech FA - AI & Business Automation Insights",
  twitterDescription:
    "AI trends, automation strategies, and practical advice for modern businesses.",
  robots: "index, follow",
});

useHead({
  htmlAttrs: { lang: "en" },
  link: [{ rel: "canonical", href: "https://tech-fa.ca/blogs" }],
});

const mobileMenuOpen = ref(false);

const blogs = ref([
  {
    slug: "benefits-of-ai-automation-for-restaurants",
    title: "How AI Automation Helps Restaurants Serve Guests Faster",
    excerpt:
      "See how AI call, email, review, and social messaging assistants help restaurants capture reservations, answer guests, and protect their reputation.",
    date: "April 29, 2026",
    category: "Industry Solutions",
    icon: "🍽️",
    gradient: "bg-gradient-to-br from-rose-500 to-orange-600",
    image: null,
    available: true,
  },
  {
    slug: "benefits-of-ai-automation-for-mechanics",
    title: "How AI Automation Helps Mechanics Book More Repair Jobs",
    excerpt:
      "Learn how auto shops can use AI assistants to answer missed calls, qualify repair requests, respond to reviews, and turn messages into appointments.",
    date: "April 29, 2026",
    category: "Industry Solutions",
    icon: "🔧",
    gradient: "bg-gradient-to-br from-slate-600 to-blue-700",
    image: null,
    available: true,
  },
  {
    slug: "smart-software-solutions-backbone-modern-business",
    title:
      "Why Smart Software Solutions Are the Backbone of Modern Business",
    excerpt:
      "Real problems companies face every day, slow workflows, costly errors, and disconnected systems. Here's how smart software changes everything.",
    date: "January 11, 2025",
    category: "AI & Automation",
    icon: "🧠",
    gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
    image: "/blog-1.png",
    available: true,
  },
  {
    slug: "turning-data-into-actionable-business-intelligence",
    title: "Turning Data Into Actionable Business Intelligence",
    excerpt:
      "Discover how modern businesses are leveraging AI-powered analytics to make smarter decisions, predict market trends, and stay ahead of the competition.",
    date: "Coming Soon",
    category: "Analytics",
    icon: "📊",
    gradient: "bg-gradient-to-br from-green-500 to-teal-600",
    image: null,
    available: false,
  },
  {
    slug: "complete-guide-workflow-automation",
    title: "The Complete Guide to Workflow Automation",
    excerpt:
      "Learn how to identify automation opportunities in your business, implement smart workflows, and measure the ROI of your automation initiatives.",
    date: "Coming Soon",
    category: "Automation",
    icon: "🤖",
    gradient: "bg-gradient-to-br from-orange-500 to-red-600",
    image: null,
    available: false,
  },
]);

const subscriptionEmail = ref("");
const isSubscribing = ref(false);
const subscriptionStatus = ref({
  success: false,
  message: "",
});

const handleSubscription = async () => {
  try {
    isSubscribing.value = true;
    subscriptionStatus.value = { success: false, message: "" };

    if (!subscriptionEmail.value) {
      throw new Error("Please enter your email address");
    }

    const response = await $fetch("/api/contact", {
      method: "POST",
      body: {
        name: "Newsletter Subscriber",
        email: subscriptionEmail.value,
        company: "",
        message:
          "I would like to subscribe to your newsletter to receive the latest AI and automation insights.",
        source: "techfa",
      },
    });

    if (response.status === 200) {
      subscriptionStatus.value = {
        success: true,
        message:
          "Thank you for subscribing! You'll receive our latest insights in your inbox.",
      };
      subscriptionEmail.value = "";
    } else {
      throw new Error(response.message || "Failed to subscribe");
    }
  } catch (error) {
    subscriptionStatus.value = {
      success: false,
      message: error.message || "Something went wrong. Please try again.",
    };
  } finally {
    isSubscribing.value = false;
  }
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

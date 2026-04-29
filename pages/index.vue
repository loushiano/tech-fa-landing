<template>
  <main>
    <!-- Header -->
    <header
      class="fixed top-0 left-0 w-full z-50 border-b border-base-300 backdrop-blur bg-background/80 shadow-sm"
    >
      <div class="container flex h-16 items-center justify-between px-4">
        <div class="flex items-center gap-6">
          <a aria-label="Homepage" class="flex items-center gap-2" href="/">
            <img src="/tech-fa-full.png" class="h-14" alt="Tech FA" />
          </a>
          <nav class="hidden md:flex items-center gap-6">
            <a
              class="text-sm font-medium text-foreground hover:text-primary transition"
              href="#solutions"
              >Solutions</a
            >
            <a
              class="text-sm font-medium text-foreground hover:text-primary transition"
              href="#how-it-works"
              >How It Works</a
            >
            <a
              class="text-sm font-medium text-foreground hover:text-primary transition"
              href="#why-us"
              >Why Us</a
            >
            <NuxtLink
              class="text-sm font-medium text-foreground hover:text-primary transition"
              to="/blogs"
              >Blog</NuxtLink
            >
            <a
              class="text-sm font-medium text-foreground hover:text-primary transition"
              href="#contact"
              >Contact</a
            >
          </nav>
        </div>
        <div class="hidden md:flex items-center gap-4">
          <a
            class="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-content shadow-sm hover:bg-primary-focus h-10 px-6 rounded-full text-sm font-semibold"
            href="#contact"
            >Get Started Free</a
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
          <a
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            href="#solutions"
            @click="mobileMenuOpen = false"
            >Solutions</a
          >
          <a
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            href="#how-it-works"
            @click="mobileMenuOpen = false"
            >How It Works</a
          >
          <a
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            href="#why-us"
            @click="mobileMenuOpen = false"
            >Why Us</a
          >
          <NuxtLink
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            to="/blogs"
            @click="mobileMenuOpen = false"
            >Blog</NuxtLink
          >
          <a
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            href="#contact"
            @click="mobileMenuOpen = false"
            >Contact</a
          >
          <a
            class="inline-flex items-center justify-center bg-primary text-primary-content shadow-sm hover:bg-primary-focus h-10 px-6 rounded-full text-sm font-semibold mt-2"
            href="#contact"
            @click="mobileMenuOpen = false"
            >Get Started Free</a
          >
        </nav>
      </div>
    </header>

    <main class="min-h-[calc(100vh-176px)] bg-background">
      <!-- Hero -->
      <section id="hero" class="flex flex-col relative overflow-hidden">
        <div
          class="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"
        ></div>
        <div
          class="flex flex-col items-center pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 relative z-10"
        >
          <div
            class="flex w-full max-w-5xl flex-col space-y-6 overflow-hidden pt-8 px-4"
          >
            <div class="hero-title flex justify-center">
              <span
                class="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-2"
                >AI-Powered Business Automation</span
              >
            </div>
            <h1
              class="hero-title text-center text-foreground font-semibold tracking-[-0.02em] text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-tight"
            >
              <span class="inline">We Automate Your Business </span>
              <span class="inline text-primary">Workflows </span>
              <span class="inline">Using </span>
              <span class="inline text-secondary">AI.</span>
            </h1>
            <p
              class="hero-subtitle text-center text-lg sm:text-xl text-muted-foreground mt-6 max-w-3xl mx-auto"
            >
              We specialize in automating business processes and workflows using
              the newest AI technologies. We implement it for free, you
              only pay for what you use.
            </p>
          </div>
          <div
            class="hero-buttons mx-auto mt-8 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <div class="flex flex-col items-center gap-4">
              <div
                class="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto"
              >
                <a
                  class="inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold shadow h-12 rounded-full px-8 bg-primary hover:bg-primary-focus text-primary-content transition-all duration-300"
                  href="#contact"
                  >Get Started Free</a
                >
                <a
                  class="inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold h-12 rounded-full px-8 border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300"
                  href="#how-it-works"
                  >See How It Works</a
                >
              </div>
              <p class="text-sm text-muted-foreground">
                Zero upfront cost &middot; Pay only per usage
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Solutions / What We've Automated -->
      <section id="solutions" class="py-20 bg-base-100">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-12" data-animate="fade-up">
              <span
                class="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4"
                >Our Solutions</span
              >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                AI Assistants We've Built
              </h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real AI solutions already automating work for businesses like
                yours, with many more on the way.
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Solution 1: Email Assistant -->
              <div
                class="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                data-animate="fade-up"
                data-animate-delay="1"
              >
                <div
                  class="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold"
                >
                  Live
                </div>
                <div
                  class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-7 h-7 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  AI Email Assistant
                </h3>
                <p class="text-muted-foreground mb-4">
                  An intelligent email assistant that reads from your knowledge
                  base, documents, and resources you feed it, then
                  drafts accurate, on-brand replies automatically.
                </p>
                <ul class="space-y-2 text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Learns from your docs, FAQs &amp; past emails
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Responds in your tone and voice
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Handles customer inquiries 24/7
                  </li>
                </ul>
              </div>

              <!-- Solution 2: Inbound Missed Calls AI -->
              <div
                class="rounded-2xl border-2 border-secondary/20 bg-secondary/5 p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                data-animate="fade-up"
                data-animate-delay="2"
              >
                <div
                  class="absolute top-4 right-4 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold"
                >
                  Live
                </div>
                <div
                  class="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-7 h-7 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  AI Inbound Call Assistant
                </h3>
                <p class="text-muted-foreground mb-4">
                  Never miss a business opportunity again. Our AI answers your
                  inbound calls when you can't, handles inquiries, and captures
                  every lead.
                </p>
                <ul class="space-y-2 text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-secondary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Answers missed calls automatically
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-secondary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Natural conversation, not a robot
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-secondary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Captures leads &amp; schedules callbacks
                  </li>
                </ul>
              </div>

              <!-- Solution 3: Telegram AI Assistant -->
              <div
                class="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                data-animate="fade-up"
                data-animate-delay="3"
              >
                <div
                  class="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold"
                >
                  Workflow
                </div>
                <div
                  class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <i class="fa-brands fa-telegram text-primary text-3xl"></i>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Telegram AI Assistant
                </h3>
                <p class="text-muted-foreground mb-4">
                  Automate Telegram conversations with an AI assistant that
                  answers questions, qualifies leads, and routes urgent messages
                  to your team.
                </p>
                <ul class="space-y-2 text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Replies instantly inside Telegram chats
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Qualifies leads and captures details
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Escalates important messages to staff
                  </li>
                </ul>
              </div>

              <!-- Solution 4: Google Review AI Assistant -->
              <div
                class="rounded-2xl border-2 border-secondary/20 bg-secondary/5 p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                data-animate="fade-up"
                data-animate-delay="4"
              >
                <div
                  class="absolute top-4 right-4 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold"
                >
                  Workflow
                </div>
                <div
                  class="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6"
                >
                  <i class="fa-brands fa-google text-secondary text-3xl"></i>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Google Review AI Assistant
                </h3>
                <p class="text-muted-foreground mb-4">
                  Monitor Google reviews, draft professional responses, and
                  alert your team when feedback needs a human follow-up.
                </p>
                <ul class="space-y-2 text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-secondary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Drafts on-brand review replies
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-secondary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Flags negative or urgent feedback
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-secondary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Helps protect your online reputation
                  </li>
                </ul>
              </div>

              <!-- Solution 5: Instagram Messaging AI Assistant -->
              <div
                class="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                data-animate="fade-up"
                data-animate-delay="5"
              >
                <div
                  class="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold"
                >
                  Workflow
                </div>
                <div
                  class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <i class="fa-brands fa-instagram text-primary text-3xl"></i>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Instagram Messaging AI Assistant
                </h3>
                <p class="text-muted-foreground mb-4">
                  Turn Instagram DMs into a reliable sales and support channel
                  with automated answers, lead capture, and follow-ups.
                </p>
                <ul class="space-y-2 text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Answers common DM questions
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Captures customer intent and contact info
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Keeps conversations moving after hours
                  </li>
                </ul>
              </div>

              <!-- Solution 6: Facebook Marketplace AI Assistant -->
              <div
                class="rounded-2xl border-2 border-secondary/20 bg-secondary/5 p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                data-animate="fade-up"
                data-animate-delay="6"
              >
                <div
                  class="absolute top-4 right-4 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold"
                >
                  Workflow
                </div>
                <div
                  class="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6"
                >
                  <i class="fa-brands fa-facebook text-secondary text-3xl"></i>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Facebook Marketplace AI Assistant
                </h3>
                <p class="text-muted-foreground mb-4">
                  Manage Marketplace inquiries faster with AI that responds to
                  buyers, shares listing details, and helps schedule next steps.
                </p>
                <ul class="space-y-2 text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-secondary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Responds to buyer inquiries quickly
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-secondary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Shares pricing, availability, and details
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-secondary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Helps book viewings and handoffs
                  </li>
                </ul>
              </div>

              <!-- Solution 7: Social Media Content Automation -->
              <div
                class="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                data-animate="fade-up"
                data-animate-delay="7"
              >
                <div
                  class="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold"
                >
                  Workflow
                </div>
                <div
                  class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <i class="fa-solid fa-wand-magic-sparkles text-primary text-3xl"></i>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Social Media Content Automation
                </h3>
                <p class="text-muted-foreground mb-4">
                  Plan, draft, and repurpose social content with AI workflows
                  that keep your brand active across the platforms that matter.
                </p>
                <ul class="space-y-2 text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Generates post ideas and captions
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Repurposes one idea across channels
                  </li>
                  <li class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Maintains a consistent posting rhythm
                  </li>
                </ul>
              </div>
            </div>

            <!-- More Coming Soon -->
            <div
              class="mt-8 rounded-2xl border-2 border-dashed border-base-300 bg-base-100 p-8 text-center"
              data-animate="fade-up"
              data-animate-delay="8"
            >
              <div
                class="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mx-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-7 h-7 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-foreground mb-2">
                Many More Coming Soon
              </h3>
              <p class="text-muted-foreground max-w-lg mx-auto">
                We're building new AI-powered automations every month,
                from invoice processing to appointment scheduling.
                <a
                  href="#contact"
                  class="text-primary font-semibold hover:underline"
                  >Tell us what you need.</a
                >
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works -->
      <section id="how-it-works" class="py-20 bg-background">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-16" data-animate="fade-up">
              <span
                class="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
                >Simple Process</span
              >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                How It Works
              </h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                Getting started is simple. Zero risk, zero upfront investment.
              </p>
            </div>

            <div class="max-w-3xl mx-auto space-y-0">
              <!-- Step 1: Reach Out -->
              <div
                class="relative flex gap-6 md:gap-8 pb-12"
                data-animate="fade-up"
                data-animate-delay="1"
              >
                <div class="flex flex-col items-center">
                  <div
                    class="w-14 h-14 rounded-full bg-primary text-primary-content text-xl font-bold flex items-center justify-center flex-shrink-0 z-10"
                  >
                    1
                  </div>
                  <div class="w-0.5 flex-1 bg-primary/20 mt-3"></div>
                </div>
                <div class="pt-2 pb-4">
                  <div
                    class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-7 h-7 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-foreground mb-2">
                    You Reach Out
                  </h3>
                  <p class="text-muted-foreground leading-relaxed">
                    Send us a message or book a call. Tell us about your
                    business and the manual processes that are slowing you down.
                  </p>
                </div>
              </div>

              <!-- Step 2: We Analyze -->
              <div
                class="relative flex gap-6 md:gap-8 pb-12"
                data-animate="fade-up"
                data-animate-delay="2"
              >
                <div class="flex flex-col items-center">
                  <div
                    class="w-14 h-14 rounded-full bg-primary text-primary-content text-xl font-bold flex items-center justify-center flex-shrink-0 z-10"
                  >
                    2
                  </div>
                  <div class="w-0.5 flex-1 bg-primary/20 mt-3"></div>
                </div>
                <div class="pt-2 pb-4">
                  <div
                    class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-7 h-7 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-foreground mb-2">
                    We Analyze Your Needs
                  </h3>
                  <p class="text-muted-foreground leading-relaxed">
                    We study your workflows, identify bottlenecks, and figure
                    out exactly where AI and automation can save you the most
                    time and money.
                  </p>
                </div>
              </div>

              <!-- Step 3: We Implement Free -->
              <div
                class="relative flex gap-6 md:gap-8 pb-12"
                data-animate="fade-up"
                data-animate-delay="3"
              >
                <div class="flex flex-col items-center">
                  <div
                    class="w-14 h-14 rounded-full bg-primary text-primary-content text-xl font-bold flex items-center justify-center flex-shrink-0 z-10"
                  >
                    3
                  </div>
                  <div class="w-0.5 flex-1 bg-primary/20 mt-3"></div>
                </div>
                <div class="pt-2 pb-4">
                  <div
                    class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-7 h-7 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-foreground mb-2">
                    We Build &amp; Deploy for Free
                  </h3>
                  <p class="text-muted-foreground leading-relaxed">
                    We design, build, and deploy your custom AI automation at no
                    cost. You don't pay a cent until the solution is live and
                    working.
                  </p>
                </div>
              </div>

              <!-- Step 4: Pay Per Usage -->
              <div
                class="relative flex gap-6 md:gap-8"
                data-animate="fade-up"
                data-animate-delay="4"
              >
                <div class="flex flex-col items-center">
                  <div
                    class="w-14 h-14 rounded-full bg-secondary text-secondary-content text-xl font-bold flex items-center justify-center flex-shrink-0 z-10"
                  >
                    4
                  </div>
                </div>
                <div class="pt-2">
                  <div
                    class="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-7 h-7 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-foreground mb-2">
                    You Pay Only Per Usage
                  </h3>
                  <p class="text-muted-foreground leading-relaxed">
                    No subscriptions, no surprises. You only pay based on how
                    much the automation runs. The more value it delivers, the
                    more you save.
                  </p>
                </div>
              </div>
            </div>

            <div class="text-center mt-16" data-animate="fade-up">
              <a
                href="#contact"
                class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-content font-semibold hover:bg-primary-focus transition-colors"
              >
                Start Your Free Automation
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Us -->
      <section id="why-us" class="py-20 bg-base-100">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center" data-animate="fade-up">
              <span
                class="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
                >Why Tech FA</span
              >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                Why Businesses Choose Us
              </h2>
              <p
                class="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
              >
                We take the risk so you don't have to. Free implementation,
                pay-per-use pricing, and cutting-edge AI.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <!-- Card 1: Zero Upfront Cost -->
              <div
                class="bg-background rounded-2xl p-8 border border-base-300 hover:shadow-lg transition-all duration-300"
                data-animate="fade-up"
                data-animate-delay="1"
              >
                <div
                  class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-7 h-7 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Zero Upfront Cost
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  We build and deploy your AI automation completely free. No
                  setup fees, no development charges. You only pay when the
                  automation is live and delivering results.
                </p>
              </div>

              <!-- Card 2: Pay Per Usage -->
              <div
                class="bg-background rounded-2xl p-8 border border-base-300 hover:shadow-lg transition-all duration-300"
                data-animate="fade-up"
                data-animate-delay="2"
              >
                <div
                  class="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-7 h-7 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Pay Only for What You Use
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  No monthly subscriptions or hidden fees. Our usage-based
                  pricing means you pay proportionally to the value delivered.
                  If it doesn't run, you don't pay.
                </p>
              </div>

              <!-- Card 3: Cutting-Edge AI -->
              <div
                class="bg-background rounded-2xl p-8 border border-base-300 hover:shadow-lg transition-all duration-300"
                data-animate="fade-up"
                data-animate-delay="3"
              >
                <div
                  class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-7 h-7 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Newest AI Technologies
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  We use the latest in AI and machine learning to build
                  solutions that are smarter, faster, and more reliable. Your
                  business stays ahead of the curve.
                </p>
              </div>

              <!-- Card 4: Tailored to You -->
              <div
                class="bg-background rounded-2xl p-8 border border-base-300 hover:shadow-lg transition-all duration-300"
                data-animate="fade-up"
                data-animate-delay="4"
              >
                <div
                  class="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-7 h-7 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.42 15.17l-5.384 3.07a.75.75 0 01-1.088-.791l1.028-5.993-4.355-4.244a.75.75 0 01.416-1.28l6.016-.874L10.69 0a.75.75 0 011.342 0l2.689 5.452 6.015.874a.75.75 0 01.416 1.28l-4.355 4.244 1.028 5.993a.75.75 0 01-1.088.791L11.42 15.17z"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Tailored to Your Business
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  No cookie-cutter templates. Every automation we build is
                  custom-designed for your specific workflows, tools, and team.
                  It fits like a glove.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="py-20 bg-background">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-12" data-animate="fade-up">
              <span
                class="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4"
                >Testimonials</span
              >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                What Our Clients Say
              </h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from real businesses we've helped automate.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <div
                class="bg-base-100 rounded-2xl p-8 border border-base-300 shadow-sm"
                data-animate="fade-up"
                data-animate-delay="1"
              >
                <div class="flex items-center gap-1 mb-4">
                  <svg
                    v-for="i in 5"
                    :key="i"
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <blockquote
                  class="text-foreground text-lg leading-relaxed mb-6"
                >
                  "Tech FA connected our scheduling, billing, and payroll
                  systems in weeks. What used to take our team hours of manual
                  data entry now happens automatically. We've saved over 20
                  hours per week and virtually eliminated billing errors."
                </blockquote>
                <div class="flex items-center gap-3">
                  <div
                    class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <span class="text-primary font-bold text-lg">P</span>
                  </div>
                  <div>
                    <div class="font-semibold text-foreground">Pat</div>
                    <div class="text-sm text-muted-foreground">
                      President, NHC 24/7
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="bg-base-100 rounded-2xl p-8 border border-base-300 shadow-sm"
                data-animate="fade-up"
                data-animate-delay="2"
              >
                <div class="flex items-center gap-1 mb-4">
                  <svg
                    v-for="i in 5"
                    :key="i"
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <blockquote
                  class="text-foreground text-lg leading-relaxed mb-6"
                >
                  "The AI automation Tech FA built for us transformed how we
                  process documents. What used to require three people reviewing
                  reports now happens instantly with higher accuracy. It's been a
                  game-changer for our operations."
                </blockquote>
                <div class="flex items-center gap-3">
                  <div
                    class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center"
                  >
                    <span class="text-secondary font-bold text-lg">D</span>
                  </div>
                  <div>
                    <div class="font-semibold text-foreground">Darryl</div>
                    <div class="text-sm text-muted-foreground">
                      CTO, Optimum
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Section -->
      <section id="blog" class="py-20 bg-base-100">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-12" data-animate="fade-up">
              <span
                class="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
                >Our Blog</span
              >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                Latest Insights
              </h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                AI trends, automation strategies, and practical advice for
                modern businesses.
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
              <NuxtLink
                v-for="post in blogPosts"
                :key="post.slug"
                :to="`/blog/${post.slug}`"
                class="group bg-background rounded-2xl border border-base-300 overflow-hidden hover:shadow-lg transition-all duration-300"
                data-animate="fade-up"
              >
                <div
                  class="h-48 relative overflow-hidden"
                  :class="post.gradient"
                >
                  <div
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <div class="text-center text-white">
                      <div class="text-4xl mb-2">{{ post.icon }}</div>
                      <div class="text-sm font-medium opacity-90">
                        {{ post.category }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full"
                      >{{ post.category }}</span
                    >
                    <span class="text-xs text-muted-foreground">{{
                      post.date
                    }}</span>
                  </div>
                  <h3
                    class="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2"
                  >
                    {{ post.title }}
                  </h3>
                  <p
                    class="text-sm text-muted-foreground line-clamp-2"
                  >
                    {{ post.excerpt }}
                  </p>
                </div>
              </NuxtLink>
            </div>

            <div class="text-center mt-12" data-animate="fade-up">
              <NuxtLink
                to="/blogs"
                class="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                View All Posts
                <svg
                  class="w-4 h-4 ml-2"
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
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section
        id="contact"
        class="py-24 bg-background relative overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        ></div>
        <div class="container mx-auto px-4 relative z-10">
          <div class="text-center mb-12" data-animate="fade-up">
            <span
              class="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
              >Contact Us</span
            >
            <h2 class="text-4xl font-bold text-foreground mb-4">
              Let's Automate Your Workflows
            </h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to eliminate manual work and let AI handle the heavy
              lifting? Reach out and we'll analyze your needs for free.
            </p>
          </div>
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          >
            <div
              class="flex flex-col justify-center"
              data-animate="fade-up"
              data-animate-delay="1"
            >
              <div class="space-y-6">
                <div
                  class="flex items-center bg-base-100 p-5 rounded-2xl border border-base-300 hover:border-primary/50 transition-all duration-300"
                >
                  <div
                    class="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mr-4"
                  >
                    <i class="fa-solid fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-foreground">Email Us</h4>
                    <p class="text-primary">ali@tech-fa.ca</p>
                  </div>
                </div>

                <div
                  class="flex items-center bg-base-100 p-5 rounded-2xl border border-base-300 hover:border-primary/50 transition-all duration-300"
                >
                  <div
                    class="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mr-4"
                  >
                    <i class="fa-solid fa-calendar text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-foreground">
                      Schedule a Call
                    </h4>
                    <p class="text-muted-foreground">
                      Book a free consultation
                    </p>
                  </div>
                </div>

                <div
                  class="bg-primary/5 border border-primary/20 rounded-2xl p-5"
                >
                  <div class="flex items-center gap-3 mb-2">
                    <svg
                      class="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span class="text-foreground font-medium"
                      >Free implementation</span
                    >
                  </div>
                  <div class="flex items-center gap-3 mb-2">
                    <svg
                      class="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span class="text-foreground font-medium"
                      >Pay only per usage</span
                    >
                  </div>
                  <div class="flex items-center gap-3">
                    <svg
                      class="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span class="text-foreground font-medium"
                      >No long-term contracts</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <p class="mb-4 text-muted-foreground font-medium">
                  Follow us on social media
                </p>
                <div class="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/company/tech-fa"
                    class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-primary-focus cursor-pointer transition-all duration-300"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <i class="fa-brands fa-linkedin-in text-lg"></i>
                  </a>
                  <a
                    href="#"
                    class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-primary-focus cursor-pointer transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <i class="fa-brands fa-twitter text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div data-animate="fade-up" data-animate-delay="2">
              <div
                class="bg-base-100 p-8 rounded-2xl border border-base-300"
              >
                <h3 class="text-2xl font-semibold mb-6 text-foreground">
                  Send Us a Message
                </h3>
                <form @submit.prevent="handleSubmit" class="space-y-4">
                  <div class="mb-4">
                    <label
                      class="block text-sm font-medium text-foreground mb-2"
                      for="name"
                      >Full Name</label
                    >
                    <input
                      id="name"
                      type="text"
                      v-model="form.name"
                      class="w-full p-4 bg-background border border-base-300 rounded-xl text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block text-sm font-medium text-foreground mb-2"
                      for="email"
                      >Email Address</label
                    >
                    <input
                      id="email"
                      type="email"
                      v-model="form.email"
                      class="w-full p-4 bg-background border border-base-300 rounded-xl text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block text-sm font-medium text-foreground mb-2"
                      for="company"
                      >Company</label
                    >
                    <input
                      id="company"
                      type="text"
                      v-model="form.company"
                      class="w-full p-4 bg-background border border-base-300 rounded-xl text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block text-sm font-medium text-foreground mb-2"
                      for="message"
                      >Message</label
                    >
                    <textarea
                      id="message"
                      rows="4"
                      v-model="form.message"
                      class="w-full p-4 bg-background border border-base-300 rounded-xl text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                      placeholder="Tell us about the workflows you'd like to automate"
                      required
                    ></textarea>
                  </div>

                  <div
                    v-if="submitStatus.message"
                    :class="{
                      'text-success bg-success/10 p-3 rounded-lg':
                        submitStatus.success,
                      'text-error bg-error/10 p-3 rounded-lg':
                        !submitStatus.success,
                    }"
                    class="mb-4"
                  >
                    {{ submitStatus.message }}
                  </div>
                  <button
                    type="submit"
                    class="w-full bg-primary hover:bg-primary-focus text-primary-content py-4 px-6 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                    :disabled="isSubmitting"
                  >
                    {{ isSubmitting ? "Sending..." : "Send Message" }}
                    <i class="fa-solid fa-paper-plane ml-2"></i>
                  </button>
                </form>
              </div>
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
                  <a
                    href="#solutions"
                    class="text-muted-foreground hover:text-primary transition"
                    >Solutions</a
                  >
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    class="text-muted-foreground hover:text-primary transition"
                    >How It Works</a
                  >
                </li>
                <li>
                  <a
                    href="#why-us"
                    class="text-muted-foreground hover:text-primary transition"
                    >Why Us</a
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
                  <a
                    href="#contact"
                    class="text-muted-foreground hover:text-primary transition"
                    >Contact</a
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
    </main>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";

useSeoMeta({
  title: "Tech FA | AI-Powered Business Workflow Automation",
  ogTitle: "Tech FA | AI-Powered Business Workflow Automation",
  description:
    "We automate your business processes and workflows using the newest AI technologies. Free implementation — you only pay per usage. AI email, call, Telegram, Google review, Instagram, Facebook Marketplace, and social media assistants.",
  ogDescription:
    "We automate your business processes and workflows using the newest AI technologies. Free implementation — you only pay per usage.",
  ogImage: "/tech-fa-full.png",
  ogUrl: "https://tech-fa.ca",
  ogType: "website",
  ogSiteName: "Tech FA",
  twitterCard: "summary_large_image",
  twitterTitle: "Tech FA | AI-Powered Business Workflow Automation",
  twitterDescription:
    "We automate your business workflows with AI assistants for email, calls, messaging, reviews, and social media.",
  robots: "index, follow",
});

useHead({
  htmlAttrs: { lang: "en" },
  link: [{ rel: "canonical", href: "https://tech-fa.ca" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Tech FA",
        url: "https://tech-fa.ca",
        logo: "https://tech-fa.ca/tech-fa-full.png",
        description:
          "We automate your business processes and workflows using the newest AI technologies. Free implementation — you only pay per usage.",
        contactPoint: {
          "@type": "ContactPoint",
          email: "ali@tech-fa.ca",
          contactType: "sales",
        },
        sameAs: ["https://www.linkedin.com/company/tech-fa"],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Tech FA",
        url: "https://tech-fa.ca",
      }),
    },
  ],
});

const mobileMenuOpen = ref(false);
const form = ref({
  name: "",
  email: "",
  company: "",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref({
  success: false,
  message: "",
});

const blogPosts = ref([
  {
    slug: "benefits-of-ai-automation-for-restaurants",
    title: "How AI Automation Helps Restaurants Serve Guests Faster",
    excerpt:
      "See how AI call, email, review, and social messaging assistants help restaurants capture reservations, answer guests, and protect their reputation.",
    date: "Apr 29, 2026",
    category: "Industry Solutions",
    icon: "🍽️",
    gradient: "bg-gradient-to-br from-rose-500 to-orange-600",
  },
  {
    slug: "benefits-of-ai-automation-for-mechanics",
    title: "How AI Automation Helps Mechanics Book More Repair Jobs",
    excerpt:
      "Learn how auto shops can use AI assistants to answer missed calls, qualify repair requests, respond to reviews, and turn messages into appointments.",
    date: "Apr 29, 2026",
    category: "Industry Solutions",
    icon: "🔧",
    gradient: "bg-gradient-to-br from-slate-600 to-blue-700",
  },
  {
    slug: "smart-software-solutions-backbone-modern-business",
    title:
      "Why Smart Software Solutions Are the Backbone of Modern Business",
    excerpt:
      "Real problems companies face every day — slow workflows, costly errors, and disconnected systems.",
    date: "Jan 11, 2025",
    category: "AI & Automation",
    icon: "🧠",
    gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    slug: "turning-data-into-actionable-business-intelligence",
    title: "Turning Data Into Actionable Business Intelligence",
    excerpt:
      "How modern businesses leverage AI-powered analytics to make smarter decisions and predict trends.",
    date: "Coming Soon",
    category: "Analytics",
    icon: "📊",
    gradient: "bg-gradient-to-br from-green-500 to-teal-600",
  },
  {
    slug: "complete-guide-workflow-automation",
    title: "The Complete Guide to Workflow Automation",
    excerpt:
      "Learn how to identify automation opportunities and measure the ROI of your initiatives.",
    date: "Coming Soon",
    category: "Automation",
    icon: "🤖",
    gradient: "bg-gradient-to-br from-orange-500 to-red-600",
  },
]);

const handleSubmit = async () => {
  try {
    isSubmitting.value = true;
    submitStatus.value = { success: false, message: "" };

    if (!form.value.name || !form.value.email || !form.value.message) {
      throw new Error("Please fill in all required fields");
    }

    const response = await $fetch("/api/contact", {
      method: "POST",
      body: { ...form.value, source: "techfa" },
    });

    if (response.status === 200) {
      submitStatus.value = {
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
      };
      form.value = {
        name: "",
        email: "",
        company: "",
        message: "",
      };
    } else {
      throw new Error(response.message || "Failed to send message");
    }
  } catch (error) {
    submitStatus.value = {
      success: false,
      message: error.message || "Something went wrong. Please try again.",
    };
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll("[data-animate]").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-subtitle {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-buttons {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

[data-animate] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}

[data-animate="fade-up"] {
  transform: translateY(30px);
}

[data-animate="fade-in"] {
  transform: translateY(0);
}

[data-animate="slide-left"] {
  transform: translateX(-30px);
}

[data-animate="slide-right"] {
  transform: translateX(30px);
}

[data-animate].is-visible {
  opacity: 1;
  transform: translateY(0) translateX(0);
}

[data-animate-delay="1"] {
  transition-delay: 0.1s;
}
[data-animate-delay="2"] {
  transition-delay: 0.2s;
}
[data-animate-delay="3"] {
  transition-delay: 0.3s;
}
[data-animate-delay="4"] {
  transition-delay: 0.4s;
}
[data-animate-delay="5"] {
  transition-delay: 0.5s;
}
[data-animate-delay="6"] {
  transition-delay: 0.6s;
}
[data-animate-delay="7"] {
  transition-delay: 0.7s;
}
[data-animate-delay="8"] {
  transition-delay: 0.8s;
}

.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

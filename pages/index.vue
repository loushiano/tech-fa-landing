<template>
  <main>
    <!-- Header -->
    <header
      class="fixed top-0 left-0 w-full z-50 border-b border-base-300/80 backdrop-blur-xl bg-background/70"
    >
      <div class="container flex h-12 items-center justify-between px-4">
        <div class="flex items-center gap-6">
          <a aria-label="Homepage" class="flex items-center gap-2" href="/">
            <img src="/tech-fa-full.png" class="h-8 w-auto" alt="Tech FA logo" width="723" height="250" />
          </a>
          <nav class="hidden md:flex items-center gap-6">
            <a
              class="text-sm font-medium text-foreground hover:text-primary transition"
              href="#about"
              >About</a
            >
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
              >Why me</a
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
            class="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-content hover:bg-primary-focus h-10 px-6 rounded-full text-sm font-semibold"
            href="#contact"
            >Work with me</a
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
            href="#about"
            @click="mobileMenuOpen = false"
            >About</a
          >
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
            >Why me</a
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
            class="inline-flex items-center justify-center bg-primary text-primary-content hover:bg-primary-focus h-10 px-6 rounded-full text-sm font-semibold mt-2"
            href="#contact"
            @click="mobileMenuOpen = false"
            >Work with me</a
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
            class="grid w-full max-w-6xl items-center gap-10 px-4 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14"
          >
            <div class="flex flex-col space-y-6">
              <div class="hero-title">
                <span
                  class="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold"
                  >Ali Fawaz · Software engineer</span
                >
              </div>
              <h1
                class="hero-title text-foreground font-semibold tracking-[-0.02em] text-[2.25rem] sm:text-[3rem] md:text-[3.25rem] lg:text-[3.75rem] leading-tight"
              >
                Your software engineering arm, using the
                <span class="text-primary">newest AI technologies</span>
              </h1>
              <p
                class="hero-subtitle text-lg sm:text-xl text-muted-foreground max-w-2xl"
              >
                Ali Fawaz is a software engineer who can be your software
                engineering arm. I have 10 years of building software and 3
                years of integrating AI systems. I am not a company. I am one
                person who can do the work a whole team used to do. I am
                passionate about bringing software and systems into real
                businesses, and I use the newest AI technologies to raise
                performance and automation.
              </p>
              <div class="hero-buttons flex flex-col gap-4">
                <div class="flex flex-col sm:flex-row gap-3">
                  <a
                    class="inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold h-12 rounded-full px-8 bg-primary hover:bg-primary-focus text-primary-content transition-all duration-300"
                    href="#contact"
                    >Work with me</a
                  >
                  <a
                    class="inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold h-12 rounded-full px-8 border border-primary text-primary hover:bg-primary/5 transition-all duration-300"
                    href="#about"
                    >Read about Ali</a
                  >
                </div>
                <dl class="grid grid-cols-3 gap-3 max-w-lg pt-2">
                  <div class="rounded-2xl border border-base-300 bg-base-100 px-3 py-3">
                    <dt class="text-2xl font-semibold text-foreground">10</dt>
                    <dd class="text-xs sm:text-sm text-muted-foreground leading-snug">
                      years building software
                    </dd>
                  </div>
                  <div class="rounded-2xl border border-base-300 bg-base-100 px-3 py-3">
                    <dt class="text-2xl font-semibold text-foreground">3</dt>
                    <dd class="text-xs sm:text-sm text-muted-foreground leading-snug">
                      years integrating AI
                    </dd>
                  </div>
                  <div class="rounded-2xl border border-base-300 bg-base-100 px-3 py-3">
                    <dt class="text-2xl font-semibold text-foreground">1</dt>
                    <dd class="text-xs sm:text-sm text-muted-foreground leading-snug">
                      person, a whole team's work
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <figure class="hero-subtitle mx-auto w-full max-w-md lg:max-w-none">
              <img
                src="/ali-fawaz.jpg"
                alt="Portrait of Ali Fawaz, software engineer"
                width="800"
                height="800"
                fetchpriority="high"
                decoding="async"
                class="aspect-square w-full rounded-3xl object-cover object-center border border-base-300"
              />
              <figcaption class="mt-3 text-sm text-muted-foreground text-center lg:text-left">
                Ali Fawaz, software engineer. One person who can do the work a whole team used to do.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="py-20 bg-background border-t border-base-300">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <div data-animate="fade-up">
              <span
                class="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
                >About Ali Fawaz</span
              >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
              >
                Who is Ali Fawaz?
              </h2>
              <p class="text-lg text-foreground leading-relaxed mb-6">
                Ali Fawaz is a software engineer who works as a software
                engineering arm for companies that need systems built and put
                into daily use. He has 10 years of building software and 3
                years of integrating AI systems. He is one person, not a company,
                and he can do the work a whole team used to do. He designs,
                builds, and deploys the systems himself.
              </p>
              <p class="text-lg text-muted-foreground leading-relaxed mb-6">
                I am passionate about bringing software and systems into real
                businesses. I apply the newest AI technologies where they
                change how a company performs: work that used to wait on a
                person gets handled, tools that do not talk to each other get
                connected, and repeated steps get automated. The result I am
                after is a higher level of performance, with software that
                matches how the business actually runs.
              </p>
              <p class="text-lg text-muted-foreground leading-relaxed">
                Pricing is custom, based on your budget. I will not leave you
                hanging. If you do not want to keep paying me, I will teach you
                how to monitor and maintain what was built.
              </p>
            </div>

            <div class="mt-12" data-animate="fade-up" data-animate-delay="1">
              <h3 class="text-2xl font-semibold text-foreground mb-3">
                What does a software engineering arm do?
              </h3>
              <p class="text-lg text-muted-foreground leading-relaxed">
                A software engineering arm is a person who designs, builds, and
                runs the software and AI systems a company needs without hiring
                a full internal team. I am one person who can do the work a
                whole team used to do. I study how the business
                works, then apply the newest AI technologies to raise
                performance: fewer manual hours, fewer missed leads, and
                automation that stays tied to the real workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Solutions / What I've built -->
      <section id="solutions" class="py-20 bg-base-100">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-12" data-animate="fade-up">
              <span
                class="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4"
                >What I build</span
              >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                Newest AI technologies in real businesses
              </h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                These are systems I have already built. Each one uses the
                newest AI technologies to take repetitive work off a team and raise how the business
                performs.
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Solution 1: Email Assistant -->
              <div
                class="rounded-2xl border border-primary/20 bg-primary/5 p-8 transition-all duration-300 relative overflow-hidden"
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
                class="rounded-2xl border-2 border-secondary/20 bg-secondary/5 p-8 transition-all duration-300 relative overflow-hidden"
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
                  Never miss a business opportunity again. It answers
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
                class="rounded-2xl border border-primary/20 bg-primary/5 p-8 transition-all duration-300 relative overflow-hidden"
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
                class="rounded-2xl border-2 border-secondary/20 bg-secondary/5 p-8 transition-all duration-300 relative overflow-hidden"
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
                class="rounded-2xl border border-primary/20 bg-primary/5 p-8 transition-all duration-300 relative overflow-hidden"
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
                class="rounded-2xl border-2 border-secondary/20 bg-secondary/5 p-8 transition-all duration-300 relative overflow-hidden"
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
                class="rounded-2xl border border-primary/20 bg-primary/5 p-8 transition-all duration-300 relative overflow-hidden"
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
                More systems, built for the work in front of you
              </h3>
              <p class="text-muted-foreground max-w-lg mx-auto">
                I also build automations around the work a company already
                does, from invoice processing to appointment scheduling.
                <a
                  href="#contact"
                  class="text-primary font-semibold hover:underline"
                  >Tell me what you need.</a
                >
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works -->
      <section id="how-it-works" class="py-24 bg-background">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-16">
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.022em] text-foreground mb-4"
              >
                How it works
              </h2>
              <p class="text-[19px] leading-snug text-muted-foreground max-w-2xl mx-auto">
                You tell me the work and your budget. I build to that, and I do not leave you hanging.
              </p>
            </div>

            <div class="overflow-x-auto pb-2">
              <div class="relative min-w-[760px]">
                <div
                  class="pointer-events-none absolute left-[12.5%] right-[12.5%] top-4 h-px bg-base-300"
                  aria-hidden="true"
                ></div>
              <ol class="relative grid grid-cols-4 gap-8">
                <li class="relative text-center">
                  <div
                    class="relative z-10 mx-auto mb-5 flex h-8 w-8 items-center justify-center rounded-full border border-base-300 bg-background text-sm text-foreground"
                  >
                    1
                  </div>
                  <h3 class="text-[17px] font-semibold tracking-[-0.016em] text-foreground mb-2">
                    Your budget
                  </h3>
                  <p class="text-sm leading-relaxed text-muted-foreground">
                    Send me the work and what you can spend.
                  </p>
                </li>
                <li class="relative text-center">
                  <div
                    class="relative z-10 mx-auto mb-5 flex h-8 w-8 items-center justify-center rounded-full border border-base-300 bg-background text-sm text-foreground"
                  >
                    2
                  </div>
                  <h3 class="text-[17px] font-semibold tracking-[-0.016em] text-foreground mb-2">
                    A custom fit
                  </h3>
                  <p class="text-sm leading-relaxed text-muted-foreground">
                    I shape the system so the price matches that budget.
                  </p>
                </li>
                <li class="relative text-center">
                  <div
                    class="relative z-10 mx-auto mb-5 flex h-8 w-8 items-center justify-center rounded-full border border-base-300 bg-background text-sm text-foreground"
                  >
                    3
                  </div>
                  <h3 class="text-[17px] font-semibold tracking-[-0.016em] text-foreground mb-2">
                    I stay with it
                  </h3>
                  <p class="text-sm leading-relaxed text-muted-foreground">
                    I build and deploy it myself, and I will not leave you hanging.
                  </p>
                </li>
                <li class="relative text-center">
                  <div
                    class="relative z-10 mx-auto mb-5 flex h-8 w-8 items-center justify-center rounded-full border border-base-300 bg-background text-sm text-foreground"
                  >
                    4
                  </div>
                  <h3 class="text-[17px] font-semibold tracking-[-0.016em] text-foreground mb-2">
                    You can take it
                  </h3>
                  <p class="text-sm leading-relaxed text-muted-foreground">
                    If you stop paying me, I teach you how to monitor and maintain it.
                  </p>
                </li>
              </ol>
              </div>
            </div>


            <div class="text-center mt-16" data-animate="fade-up">
              <a
                href="#contact"
                class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-content font-semibold hover:bg-primary-focus transition-colors"
              >
                Tell me what to build
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
                >Why work with me</span
              >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                Why companies bring me in
              </h2>
              <p
                class="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
              >
                You get one engineer who has spent a decade building software
                and three years putting AI systems into real operations.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <!-- Card 1: Zero Upfront Cost -->
              <div
                class="bg-background rounded-2xl p-8 border border-base-300 transition-all duration-300"
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
                  10 years building software
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  I have spent 10 years building software that has to work in
                  the business, not only in a demo. That means systems, data,
                  and the messy handoffs between tools people already use.
                </p>
              </div>

              <!-- Card 2: Pay Per Usage -->
              <div
                class="bg-background rounded-2xl p-8 border border-base-300 transition-all duration-300"
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
                  3 years integrating AI systems
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  For the last 3 years I have integrated AI systems into live
                  work: systems that answer, draft, qualify, and route, tied to
                  the documents and tools the business already has.
                </p>
              </div>

              <!-- Card 3: Cutting-Edge AI -->
              <div
                class="bg-background rounded-2xl p-8 border border-base-300 transition-all duration-300"
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
                  One person, a whole team's work
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  I am one person, not a company. I can do the work a whole
                  team used to do. You talk to the person who designs the
                  system, writes it, and stays with it after it goes live.
                </p>
              </div>

              <!-- Card 4: Tailored to You -->
              <div
                class="bg-background rounded-2xl p-8 border border-base-300 transition-all duration-300"
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
                  Higher performance, then automation
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  I use the newest AI technologies to lift how the company
                  performs: less manual work, fewer dropped conversations, and
                  systems that match the way the business already operates.
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
                What changes when the systems are live
              </h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                Two businesses I have worked with, in their own words.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <div
                class="bg-base-100 rounded-2xl p-8 border border-base-300"
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
                  "Ali Fawaz connected our scheduling, billing, and payroll
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
                class="bg-base-100 rounded-2xl p-8 border border-base-300"
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
                  "The AI automation Ali Fawaz built for us transformed how we
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
                >Notes</span
              >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                Latest Insights
              </h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                Notes on the newest AI technologies, automation, and putting software into a
                working business.
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
              <NuxtLink
                v-for="post in blogPosts"
                :key="post.slug"
                :to="`/blog/${post.slug}`"
                class="group bg-background rounded-2xl border border-base-300 overflow-hidden transition-all duration-300"
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
                class="inline-flex items-center justify-center px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
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
                >Talk to Ali</span
            >
            <h2 class="text-4xl font-bold text-foreground mb-4">
              Tell me where performance is stuck
            </h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              Describe the work and your budget. I will tell you where software and the newest AI technologies
              can raise performance.
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
                    <h4 class="font-semibold text-foreground">Email me</h4>
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
                      Tell me your budget
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
                      >Custom pricing, based on your budget</span
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
                      >I will not leave you hanging</span
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
                      >I teach you to monitor and maintain it</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <p class="mb-4 text-muted-foreground font-medium">
                  Find me on LinkedIn
                </p>
                <div class="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/company/tech-fa"
                    class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-primary-focus cursor-pointer transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ali Fawaz on LinkedIn"
                  >
                    <i class="fa-brands fa-linkedin-in text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div data-animate="fade-up" data-animate-delay="2">
              <div
                class="bg-base-100 p-8 rounded-2xl border border-base-300"
              >
                <h3 class="text-2xl font-semibold mb-6 text-foreground">
                  Send me a message
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
                      placeholder="Tell me about the work you want software or the newest AI technologies to take on"
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
                    class="w-full bg-primary hover:bg-primary-focus text-primary-content py-4 px-6 rounded-xl transition-all duration-300 font-semibold"
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
                <img src="/tech-fa-full.png" class="h-14 w-auto" alt="Tech FA logo" width="723" height="250" />
              </div>
              <p
                class="text-sm text-muted-foreground leading-relaxed max-w-md"
              >
                Ali Fawaz is one person, not a company, who can do the work a
                whole team used to do. 10 years building software, 3 years
                integrating the newest AI technologies.
              </p>
            </div>

            <div>
              <h4 class="text-foreground font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#about"
                    class="text-muted-foreground hover:text-primary transition"
                    >About</a
                  >
                </li>
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
                    >Why me</a
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
              <div class="mb-4 md:mb-0">
                <p class="text-sm text-muted-foreground">
                  &copy; 2026 Afawaz Technologies Inc. All rights reserved.
                </p>
                <p class="text-xs text-muted-foreground mt-1">
                  Tech FA is a trade name of Afawaz Technologies Inc.
                </p>
              </div>
              <div class="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/tech-fa"
                  class="w-10 h-10 bg-base-200 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ali Fawaz on LinkedIn"
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
import { computed, ref, onMounted } from "vue";

useSeoMeta({
  title: "Ali Fawaz | Software Engineering Arm for Businesses",
  ogTitle: "Ali Fawaz | Software Engineering Arm for Businesses",
  description:
    "Ali Fawaz is one person, not a company, who can do the work a whole team used to do. 10 years building software, 3 years with the newest AI technologies.",
  ogDescription:
    "Ali Fawaz is one person, not a company, who can do the work a whole team used to do. 10 years building software, 3 years with the newest AI technologies.",
  ogImage: "https://tech-fa.ca/ali-fawaz.jpg",
  ogImageAlt: "Portrait of Ali Fawaz, software engineer",
  ogUrl: "https://tech-fa.ca",
  ogType: "profile",
  ogSiteName: "Ali Fawaz",
  twitterCard: "summary_large_image",
  twitterTitle: "Ali Fawaz | Software Engineering Arm for Businesses",
  twitterDescription:
    "One person, not a company, who can do the work a whole team used to do.",
  robots: "index, follow",
  author: "Ali Fawaz",
});

useHead({
  htmlAttrs: { lang: "en" },
  link: [{ rel: "canonical", href: "https://tech-fa.ca/" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": "https://tech-fa.ca/#ali-fawaz",
            name: "Ali Fawaz",
            givenName: "Ali",
            familyName: "Fawaz",
            url: "https://tech-fa.ca/",
            image: "https://tech-fa.ca/ali-fawaz.jpg",
            jobTitle: "Software Engineer",
            email: "ali@tech-fa.ca",
            description:
              "Ali Fawaz is one person, not a company, who can do the work a whole team used to do. He has 10 years of building software and 3 years of integrating AI systems, and he works as a software engineering arm for businesses.",
            knowsAbout: [
              "Software engineering",
              "AI systems integration",
              "Newest AI technologies",
              "Business automation",
              "Workflow automation",
            ],
            worksFor: { "@id": "https://tech-fa.ca/#organization" },
          },
          {
            "@type": "Organization",
            "@id": "https://tech-fa.ca/#organization",
            name: "Tech FA",
            legalName: "Afawaz Technologies Inc.",
            url: "https://tech-fa.ca/",
            email: "ali@tech-fa.ca",
          },
          {
            "@type": "ProfilePage",
            "@id": "https://tech-fa.ca/#webpage",
            url: "https://tech-fa.ca/",
            name: "Ali Fawaz | Software Engineering Arm for Businesses",
            dateModified: "2026-10-13",
            inLanguage: "en",
            mainEntity: { "@id": "https://tech-fa.ca/#ali-fawaz" },
            about: { "@id": "https://tech-fa.ca/#ali-fawaz" },
          },
          {
            "@type": "WebSite",
            "@id": "https://tech-fa.ca/#website",
            name: "Ali Fawaz",
            url: "https://tech-fa.ca/",
            publisher: { "@id": "https://tech-fa.ca/#ali-fawaz" },
            copyrightHolder: { "@id": "https://tech-fa.ca/#organization" },
          },
        ],
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

const staticBlogPosts = [
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
];

const { data: generatedBlogPosts } = await useFetch("/api/blogs", {
  default: () => [],
});

const blogPosts = computed(() => {
  const staticSlugs = new Set(staticBlogPosts.map((post) => post.slug));
  const generated = (generatedBlogPosts.value || []).filter(
    (post) => !staticSlugs.has(post.slug),
  );
  return [...generated, ...staticBlogPosts];
});

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
        message: "Thank you. I will get back to you soon.",
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
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

<template>
  <main>
    <!-- Header -->
    <header
      class="fixed top-0 left-0 w-full z-50 border-b border-base-300 backdrop-blur bg-background/80 shadow-sm"
    >
      <div class="container flex h-16 items-center justify-between px-4">
        <div class="flex items-center gap-6">
          <a aria-label="Homepage" class="flex items-center gap-2" href="/">
            <img src="/tech-fa-full.png" class="h-14" />
          </a>
          <nav class="hidden md:flex items-center gap-6">
            <a
              class="text-sm font-medium text-foreground hover:text-primary transition"
              href="#why-us"
              >Why Us</a
            >
            <a
              class="text-sm font-medium text-foreground hover:text-primary transition"
              href="#services"
              >Services</a
            >
            <a
              class="text-sm font-medium text-foreground hover:text-primary transition"
              href="#integrations"
              >Integrations</a
            >
            <a
              class="text-sm font-medium text-foreground hover:text-primary transition"
              href="#how-it-works"
              >How It Works</a
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
            >Get Started</a
          >
        </div>
        <!-- Mobile Menu Button -->
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
      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-background border-t border-base-300"
      >
        <nav class="flex flex-col p-4 gap-4">
          <a
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            href="#why-us"
            @click="mobileMenuOpen = false"
            >Why Us</a
          >
          <a
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            href="#services"
            @click="mobileMenuOpen = false"
            >Services</a
          >
          <a
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            href="#integrations"
            @click="mobileMenuOpen = false"
            >Integrations</a
          >
          <a
            class="text-sm font-medium text-foreground hover:text-primary transition py-2"
            href="#how-it-works"
            @click="mobileMenuOpen = false"
            >How It Works</a
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
            >Get Started</a
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
            <h1
              class="hero-title text-center text-foreground font-semibold tracking-[-0.02em] text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-tight"
            >
              <span class="inline">Stop the Multiple Data Entry. </span>
              <span class="inline">Connect Everything with </span>
              <span class="inline text-primary">AI.</span>
            </h1>
            <p
              class="hero-subtitle text-center text-lg sm:text-xl text-muted-foreground mt-6 max-w-3xl mx-auto"
            >
              We eliminate manual data entry between your platforms, reduce
              errors, and automate workflows with AI so your team focuses on
              what matters.
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
                  >Start Your Integration</a
                >
                <a
                  class="inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold h-12 rounded-full px-8 border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300"
                  href="#how-it-works"
                  >See How It Works</a
                >
              </div>
              <a
                class="flex items-center gap-1 text-sm font-medium py-1 relative group transition-all duration-300 text-muted-foreground hover:text-foreground"
                href="#contact"
                ><span>Questions? Let's talk</span>
                <span
                  class="absolute bottom-0 left-0 right-0 h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Us / Value Props -->
      <section id="why-us" class="py-20 bg-base-100">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center" data-animate="fade-up">
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                Why Companies Choose Us
              </h2>
              <p
                class="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
              >
                We connect your platforms, eliminate redundant work, and let AI
                handle the rest.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <!-- Card 1: Save Time -->
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Save 20+ Hours/Week
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  Eliminate manual data entry between systems. Information flows
                  automatically between your platforms in real time, no more
                  copying and pasting between apps.
                </p>
              </div>

              <!-- Card 2: Reduce Errors -->
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Reduce Errors by 90%
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  Manual re-entry causes costly mistakes. Automated syncing
                  ensures data accuracy across every system, from invoices to
                  inventory to payroll.
                </p>
              </div>

              <!-- Card 3: AI Automation -->
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
                  AI-Powered Automation
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  Intelligent workflows that learn your patterns. From document
                  processing to predictive analytics, AI handles the heavy
                  lifting so your team doesn't have to.
                </p>
              </div>

              <!-- Card 4: Connect Platforms -->
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
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Connect Any Platform
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  We integrate with 50+ platforms across finance, operations,
                  HR, and CRM. If it has an API, we can connect it, no data
                  migrations required.
                </p>
              </div>
            </div>

            <!-- Stats -->
            <div
              class="mt-16 grid grid-cols-3 gap-6 text-center"
              data-animate="fade-up"
            >
              <div class="p-6">
                <div class="text-3xl font-bold text-primary mb-2">90%</div>
                <div class="text-muted-foreground">Error Reduction</div>
              </div>
              <div class="p-6">
                <div class="text-3xl font-bold text-primary mb-2">20+ hrs</div>
                <div class="text-muted-foreground">Saved Per Week</div>
              </div>
              <div class="p-6">
                <div class="text-3xl font-bold text-primary mb-2">50+</div>
                <div class="text-muted-foreground">Platforms Connected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Integration Partners -->
      <section id="integrations" class="py-20 bg-background">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-16" data-animate="fade-up">
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                We Integrate With the Tools You Already Use
              </h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                50+ platforms across finance, operations, HR, and CRM, connected seamlessly.
              </p>
            </div>

            <div class="space-y-12">
              <div
                v-for="(category, catIndex) in integrationCategories"
                :key="category.label"
                data-animate="fade-up"
                :data-animate-delay="catIndex + 1"
              >
                <h3
                  class="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 text-center"
                >
                  {{ category.label }}
                </h3>
                <div
                  class="flex flex-wrap justify-center items-center gap-8 md:gap-12"
                >
                  <div
                    v-for="logo in category.logos"
                    :key="logo.slug"
                    class="group flex flex-col items-center gap-2"
                  >
                    <div
                      class="w-16 h-16 flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <img
                        :src="`https://cdn.simpleicons.org/${logo.slug}/${logo.color}`"
                        :alt="logo.name"
                        class="w-10 h-10"
                        loading="lazy"
                        @error="(e) => (e.target.style.display = 'none')"
                      />
                    </div>
                    <span class="text-xs text-muted-foreground font-medium">{{
                      logo.name
                    }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center mt-12" data-animate="fade-up">
              <p class="text-muted-foreground">
                Don't see your platform?
                <a
                  href="#contact"
                  class="text-primary font-semibold hover:underline"
                  >We can connect it.</a
                >
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Services -->
      <section id="services" class="py-20 bg-base-100">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-12" data-animate="fade-up">
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                What We Deliver
              </h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end integration and automation services for modern
                businesses.
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
              <!-- Service 1: Integration -->
              <div
                class="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 hover:shadow-lg transition-all duration-300"
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
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Integration Services
                </h3>
                <p class="text-muted-foreground mb-4">
                  Connect your CRM, ERP, accounting, and HR platforms into one
                  seamless ecosystem. Data flows where it needs to, automatically.
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
                    Real-time bi-directional sync
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
                    Custom API development
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
                    Legacy system connectors
                  </li>
                </ul>
              </div>

              <!-- Service 2: AI Automation -->
              <div
                class="rounded-2xl border-2 border-secondary/20 bg-secondary/5 p-8 hover:shadow-lg transition-all duration-300"
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  AI Workflow Automation
                </h3>
                <p class="text-muted-foreground mb-4">
                  Automate repetitive tasks with intelligent workflows that
                  adapt to your business and get smarter over time.
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
                    Document processing & extraction
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
                    Smart routing & approvals
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
                    Chatbots & virtual assistants
                  </li>
                </ul>
              </div>

              <!-- Service 3: Analytics -->
              <div
                class="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 hover:shadow-lg transition-all duration-300"
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Analytics & Reporting
                </h3>
                <p class="text-muted-foreground mb-4">
                  Unified reporting across all your connected systems. One
                  source of truth for better decision-making.
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
                    Cross-platform dashboards
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
                    Real-time data aggregation
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
                    Custom KPI tracking
                  </li>
                </ul>
              </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-12" data-animate="fade-up">
              <a
                href="#contact"
                class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-content font-semibold hover:bg-primary-focus transition-colors"
              >
                Get a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works -->
      <section id="how-it-works" class="py-20 bg-background">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-16" data-animate="fade-up">
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                How We Work
              </h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                Getting your systems connected is easier than you think. Here's
                our process.
              </p>
            </div>

            <div class="max-w-3xl mx-auto space-y-0">
              <!-- Step 1 -->
              <div
                class="relative flex gap-6 md:gap-8 pb-12"
                data-animate="fade-up"
                data-animate-delay="1"
              >
                <!-- Timeline connector -->
                <div class="flex flex-col items-center">
                  <div
                    class="w-14 h-14 rounded-full bg-primary text-primary-content text-xl font-bold flex items-center justify-center flex-shrink-0 z-10"
                  >
                    1
                  </div>
                  <div class="w-0.5 flex-1 bg-primary/20 mt-3"></div>
                </div>
                <!-- Content -->
                <div class="pt-2 pb-4">
                  <div
                    class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <!-- Magnifying glass / Search icon -->
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
                    Discovery Call
                  </h3>
                  <p class="text-muted-foreground leading-relaxed">
                    We map your current systems, identify bottlenecks, and
                    pinpoint where automation saves you the most time.
                  </p>
                </div>
              </div>

              <!-- Step 2 -->
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
                    <!-- Puzzle piece / Blueprint icon -->
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
                        d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.421 48.421 0 01-4.185-.194M14.25 6.087c0 .662.636 1.163 1.25.98 1.64-.487 3.16-1.14 4.543-1.942a.727.727 0 00.207-1.066 48.3 48.3 0 00-4.813-5.14.727.727 0 00-1.087.207 48.423 48.423 0 01-1.942 4.543c.183.614.684 1.25 1.25 1.25h.592M14.25 6.087l-.592.008M6.358 5.893c-.614.183-1.25.684-1.25 1.25v.592m0 0c0 .355-.186.676-.401.959a1.647 1.647 0 00-.349 1.003c0 1.035 1.007 1.875 2.25 1.875s2.25-.84 2.25-1.875c0-.369-.128-.713-.349-1.003-.215-.283-.401-.604-.401-.959v0c0-.354.285-.64.643-.657a48.421 48.421 0 014.185-.194m0 0v.008m0-.008c0-.662-.636-1.163-1.25-.98a48.423 48.423 0 00-4.543 1.942.727.727 0 00-.207 1.066 48.3 48.3 0 004.813 5.14.727.727 0 001.087-.207 48.423 48.423 0 001.942-4.543c-.183-.614-.684-1.25-1.25-1.25h-.592"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-foreground mb-2">
                    Solution Design
                  </h3>
                  <p class="text-muted-foreground leading-relaxed">
                    We architect the integration plan, select the right
                    connectors, and provide a transparent fixed-price proposal.
                  </p>
                </div>
              </div>

              <!-- Step 3 -->
              <div
                class="relative flex gap-6 md:gap-8"
                data-animate="fade-up"
                data-animate-delay="3"
              >
                <div class="flex flex-col items-center">
                  <div
                    class="w-14 h-14 rounded-full bg-primary text-primary-content text-xl font-bold flex items-center justify-center flex-shrink-0 z-10"
                  >
                    3
                  </div>
                </div>
                <div class="pt-2">
                  <div
                    class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <!-- Rocket icon -->
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
                    Build & Deploy
                  </h3>
                  <p class="text-muted-foreground leading-relaxed">
                    We build, test, and deploy your integrations. Your systems
                    start syncing automatically, zero downtime required.
                  </p>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-16" data-animate="fade-up">
              <a
                href="#contact"
                class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-secondary text-secondary-content font-semibold hover:bg-secondary-focus transition-colors"
              >
                Schedule Your Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="py-20 bg-base-100">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-12" data-animate="fade-up">
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                What Our Clients Say
              </h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from real businesses we've helped transform.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <!-- Testimonial 1: Pat / NHC 24/7 -->
              <div
                class="bg-background rounded-2xl p-8 border border-base-300 shadow-sm"
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

              <!-- Testimonial 2: Darryl / Optimum -->
              <div
                class="bg-background rounded-2xl p-8 border border-base-300 shadow-sm"
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
              Let's Connect Your Apps
            </h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to eliminate double data entry and automate your workflows?
              Get in touch and let's discuss how we can help.
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
              </div>
              <div class="mt-8">
                <p class="mb-4 text-muted-foreground font-medium">
                  Follow us on social media
                </p>
                <div class="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/company/tech-fa"
                    class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-primary-focus cursor-pointer transition-all duration-300"
                  >
                    <i class="fa-brands fa-linkedin-in text-lg"></i>
                  </a>
                  <a
                    href="#"
                    class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-primary-focus cursor-pointer transition-all duration-300"
                  >
                    <i class="fa-brands fa-twitter text-lg"></i>
                  </a>
                  <a
                    href="#"
                    class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white hover:bg-secondary-focus cursor-pointer transition-all duration-300"
                  >
                    <i class="fa-brands fa-github text-lg"></i>
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
                      placeholder="Tell us about your project"
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
                <img src="/tech-fa-full.png" class="h-14" />
              </div>
              <p
                class="text-sm text-muted-foreground leading-relaxed max-w-md"
              >
                Eliminating double data entry, connecting your platforms, and
                supercharging them with AI. No data migrations, we connect
                directly to your systems.
              </p>
            </div>

            <div>
              <h4 class="text-foreground font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#why-us"
                    class="text-muted-foreground hover:text-primary transition"
                    >Why Us</a
                  >
                </li>
                <li>
                  <a
                    href="#services"
                    class="text-muted-foreground hover:text-primary transition"
                    >Services</a
                  >
                </li>
                <li>
                  <a
                    href="#integrations"
                    class="text-muted-foreground hover:text-primary transition"
                    >Integrations</a
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
                  ><i
                    class="fab fa-twitter text-muted-foreground hover:text-primary-content"
                  ></i
                ></a>
                <a
                  href="https://www.linkedin.com/company/tech-fa"
                  class="w-10 h-10 bg-base-200 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300"
                  ><i
                    class="fab fa-linkedin text-muted-foreground hover:text-primary-content"
                  ></i
                ></a>
                <a
                  href="#"
                  class="w-10 h-10 bg-base-200 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300"
                  ><i
                    class="fab fa-github text-muted-foreground hover:text-primary-content"
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

const integrationCategories = ref([
  {
    label: "Finance & Accounting",
    logos: [
      { name: "QuickBooks", slug: "quickbooks", color: "2CA01C" },
      { name: "Xero", slug: "xero", color: "13B5EA" },
      { name: "Sage", slug: "sage", color: "00D639" },
      { name: "Intuit", slug: "intuit", color: "0075DD" },
    ],
  },
  {
    label: "Operations & ERP",
    logos: [
      { name: "SAP", slug: "sap", color: "0FAAFF" },
      { name: "Odoo", slug: "odoo", color: "714B67" },
    ],
  },
  {
    label: "HR & Payroll",
    logos: [
      { name: "ADP", slug: "adp", color: "D0271D" },
      { name: "Gusto", slug: "gusto", color: "F45D48" },
    ],
  },
  {
    label: "CRM & Sales",
    logos: [
      { name: "HubSpot", slug: "hubspot", color: "FF7A59" },
      { name: "Zoho", slug: "zoho", color: "C8202B" },
    ],
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
  // Smooth Scrolling for Navigation Links
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

  // Scroll-triggered animations with Intersection Observer
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
/* Hero Animations (immediate, no observer) */
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

/* Scroll-triggered animations */
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

/* Stagger delays */
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
</style>

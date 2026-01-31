<template>
  <main>
    <header
      class="fixed top-0 left-0 w-full z-50 border-b backdrop-blur bg-background/80"
    >
      <div class="container flex h-16 items-center justify-between px-4">
        <div class="flex items-center gap-6">
          <a aria-label="Homepage" class="flex items-center gap-2" href="/">
            <span class="text-2xl font-bold text-primary">Tech FA</span>
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
            class="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-content shadow-sm hover:bg-primary-focus h-10 px-6 rounded-full text-sm font-semibold"
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
        class="md:hidden bg-background border-t border-base-200"
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
      <section id="hero" class="flex flex-col">
        <div
          class="flex flex-col items-center pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24"
        >
          <div
            class="flex w-full max-w-5xl flex-col space-y-6 overflow-hidden pt-8 px-4"
          >
            <h1
              class="text-center text-foreground font-semibold tracking-[-0.02em] text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-tight"
              style="filter: blur(0px); opacity: 1; transform: none"
            >
              <span class="inline" style="opacity: 1; transform: none"
                >Connect Your Apps. </span
              ><span class="inline" style="opacity: 1; transform: none"
                >Supercharge with </span
              ><span class="inline text-primary" style="opacity: 1; transform: none"
                >AI.</span
              >
            </h1>
            <p class="text-center text-lg sm:text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
              We integrate all your applications together and marinate them with AI.
              Existing services or custom solutions — no data migrations required.
            </p>
          </div>
          <div
            class="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            style="opacity: 1; transform: none"
          >
            <div class="flex flex-col items-center gap-4">
              <div
                class="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto"
              >
                <a
                  class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-10 rounded-full px-6 relative overflow-hidden group transition-all duration-300 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  href="#contact"
                  ><span class="relative z-10 flex items-center font-medium"
                    >Start Your Integration</span
                  ><span
                    class="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></span
                ></a>
              </div>
              <a
                class="flex items-center gap-1 text-sm font-medium py-1 relative group transition-all duration-300 text-muted-foreground hover:text-foreground"
                href="#contact"
                ><span>Questions? Let's talk</span
                ><span
                  class="absolute bottom-0 left-0 right-0 h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                ></span
              ></a>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Us Section -->
      <section id="why-us" class="py-20 bg-base-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <div
              class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2
              class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Your Apps, Connected.<br />
              <span class="text-primary">Powered by AI.</span>
            </h2>
            <p
              class="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              We specialize in making your existing tools work together seamlessly.
              Whether you use off-the-shelf services or custom solutions,
              <span class="text-foreground font-semibold"
                >we connect directly to your data</span
              > — no painful migrations, no disruptions to your workflow.
            </p>

            <div class="grid md:grid-cols-3 gap-8 mt-12">
              <div
                class="bg-background rounded-2xl p-8 shadow-sm border border-base-200"
              >
                <div
                  class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-foreground mb-3">
                  No Data Migrations
                </h3>
                <p class="text-muted-foreground">
                  We connect directly to your existing data sources. No risky migrations,
                  no downtime, no lost records. Your data stays where it is.
                </p>
              </div>

              <div
                class="bg-background rounded-2xl p-8 shadow-sm border border-base-200"
              >
                <div
                  class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-foreground mb-3">
                  AI-Powered Solutions
                </h3>
                <p class="text-muted-foreground">
                  We add intelligent automation to your workflows. From smart data processing
                  to predictive insights — we marinate your apps with AI.
                </p>
              </div>

              <div
                class="bg-background rounded-2xl p-8 shadow-sm border border-base-200"
              >
                <div
                  class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-foreground mb-3">
                  Years of Experience
                </h3>
                <p class="text-muted-foreground">
                  Our team has deep expertise in system integration and software development.
                  We've connected hundreds of apps across diverse industries.
                </p>
              </div>
            </div>

            <div
              class="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20"
            >
              <p class="text-foreground font-medium text-lg">
                "Great software doesn't replace what works — it makes everything work better together."
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-20 bg-background">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-12">
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                What We Do
              </h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                From connecting your existing tools to building custom AI solutions — we've got you covered.
              </p>
            </div>

            <!-- Services Grid -->
            <div class="grid md:grid-cols-2 gap-8">
              <!-- Service 1: App Integration -->
              <div
                class="rounded-2xl border-2 border-primary/30 bg-primary/5 p-8 hover:shadow-lg transition-shadow"
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
                  App Integration
                </h3>
                <p class="text-muted-foreground mb-4">
                  Connect your CRM, ERP, accounting software, and any other tools you use.
                  We build bridges between your systems so data flows automatically.
                </p>
                <ul class="space-y-2 text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Salesforce, HubSpot, Zoho
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    QuickBooks, Xero, SAP
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Custom APIs & databases
                  </li>
                </ul>
              </div>

              <!-- Service 2: AI Solutions -->
              <div
                class="rounded-2xl border-2 border-secondary/30 bg-secondary/5 p-8 hover:shadow-lg transition-shadow"
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
                  AI Enhancement
                </h3>
                <p class="text-muted-foreground mb-4">
                  Add intelligent automation to your workflows. We implement AI that
                  learns your business and makes your processes smarter.
                </p>
                <ul class="space-y-2 text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Intelligent document processing
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Predictive analytics
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Chatbots & virtual assistants
                  </li>
                </ul>
              </div>

              <!-- Service 3: Custom Development -->
              <div
                class="rounded-2xl border border-base-200 bg-background p-8 hover:shadow-lg transition-shadow"
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Custom Development
                </h3>
                <p class="text-muted-foreground mb-4">
                  When off-the-shelf doesn't cut it, we build custom solutions
                  tailored to your exact needs. Web apps, mobile apps, APIs — you name it.
                </p>
                <ul class="space-y-2 text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Web applications
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Mobile apps (iOS & Android)
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Backend systems & APIs
                  </li>
                </ul>
              </div>

              <!-- Service 4: Consulting -->
              <div
                class="rounded-2xl border border-base-200 bg-background p-8 hover:shadow-lg transition-shadow"
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-foreground mb-3">
                  Tech Consulting
                </h3>
                <p class="text-muted-foreground mb-4">
                  Not sure where to start? We'll audit your current setup and recommend
                  the best path forward. Strategic advice backed by hands-on experience.
                </p>
                <ul class="space-y-2 text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    System architecture review
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Technology roadmapping
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Vendor selection
                  </li>
                </ul>
              </div>
            </div>

            <!-- Value Props -->
            <div class="mt-16 grid md:grid-cols-3 gap-6 text-center">
              <div class="p-6">
                <div class="text-3xl font-bold text-primary mb-2">Competitive</div>
                <div class="text-muted-foreground">Pricing that makes sense for your budget</div>
              </div>
              <div class="p-6">
                <div class="text-3xl font-bold text-primary mb-2">10+ Years</div>
                <div class="text-muted-foreground">Combined team experience</div>
              </div>
              <div class="p-6">
                <div class="text-3xl font-bold text-primary mb-2">100+</div>
                <div class="text-muted-foreground">Integrations delivered</div>
              </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-12">
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

      <!-- How It Works Section -->
      <section id="how-it-works" class="py-20 bg-base-50">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-16">
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
              >
                How We Work
              </h2>
              <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                Getting your systems connected is easier than you think. Here's our process.
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 md:gap-12">
              <!-- Step 1 -->
              <div class="relative text-center">
                <div
                  class="w-16 h-16 rounded-full bg-primary text-primary-content text-2xl font-bold flex items-center justify-center mx-auto mb-6"
                >
                  1
                </div>
                <div
                  class="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20"
                ></div>
                <div
                  class="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-foreground mb-3">
                  Discovery Call
                </h3>
                <p class="text-muted-foreground">
                  We learn about your current tech stack, pain points, and goals.
                  What apps do you use? What data needs to flow where?
                </p>
              </div>

              <!-- Step 2 -->
              <div class="relative text-center">
                <div
                  class="w-16 h-16 rounded-full bg-primary text-primary-content text-2xl font-bold flex items-center justify-center mx-auto mb-6"
                >
                  2
                </div>
                <div
                  class="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20"
                ></div>
                <div
                  class="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-foreground mb-3">
                  Solution Design
                </h3>
                <p class="text-muted-foreground">
                  We design the integration architecture and provide a clear proposal.
                  You'll know exactly what we'll build and how much it costs.
                </p>
              </div>

              <!-- Step 3 -->
              <div class="relative text-center">
                <div
                  class="w-16 h-16 rounded-full bg-primary text-primary-content text-2xl font-bold flex items-center justify-center mx-auto mb-6"
                >
                  3
                </div>
                <div
                  class="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-foreground mb-3">
                  Build & Deploy
                </h3>
                <p class="text-muted-foreground">
                  We build the integrations, test thoroughly, and deploy.
                  Your apps start talking to each other — no downtime required.
                </p>
              </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-16">
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
      <section
        id="contact"
        class="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden"
      >
        <!-- Background decorations -->
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-80 h-80 bg-secondary-200/30 rounded-full blur-3xl"
        ></div>
        <div class="container mx-auto px-4 relative z-10">
          <div class="text-center mb-12">
            <span
              class="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
              >Contact Us</span
            >
            <h2 class="text-4xl font-bold text-foreground mb-4">
              Let's Connect Your Apps
            </h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to streamline your operations with smart integrations and AI?
              Get in touch and let's discuss how we can help.
            </p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div class="flex flex-col justify-center">
              <div class="space-y-6">
                <div
                  class="flex items-center bg-background p-5 rounded-2xl shadow-sm border border-base-200 hover:shadow-md transition-all duration-300"
                >
                  <div
                    class="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mr-4"
                  >
                    <i class="fa-solid fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-foreground">Email Us</h4>
                    <p class="text-primary">hello@techfa.io</p>
                  </div>
                </div>

                <div
                  class="flex items-center bg-background p-5 rounded-2xl shadow-sm border border-base-200 hover:shadow-md transition-all duration-300"
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
                    href="#"
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
            <div>
              <div
                class="bg-background p-8 rounded-2xl shadow-xl border border-base-200"
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
                      class="w-full p-4 border border-base-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                      class="w-full p-4 border border-base-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                      class="w-full p-4 border border-base-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                      class="w-full p-4 border border-base-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
      <footer class="bg-primary-900 text-primary-100 py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Logo and Description -->
            <div class="md:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-3xl font-bold text-white">Tech FA</span>
              </div>
              <p class="text-sm text-primary-200 leading-relaxed max-w-md">
                Integrating your applications and supercharging them with AI.
                No data migrations — we connect directly to your systems.
              </p>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="text-white font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#why-us"
                    class="text-primary-200 hover:text-white transition"
                    >Why Us</a
                  >
                </li>
                <li>
                  <a
                    href="#services"
                    class="text-primary-200 hover:text-white transition"
                    >Services</a
                  >
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    class="text-primary-200 hover:text-white transition"
                    >How It Works</a
                  >
                </li>
                <li>
                  <a
                    href="#contact"
                    class="text-primary-200 hover:text-white transition"
                    >Contact</a
                  >
                </li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div>
              <h4 class="text-white font-semibold mb-4">Contact</h4>
              <ul class="space-y-2">
                <li class="text-primary-200">
                  <i class="fa-solid fa-envelope mr-2"></i>
                  hello@techfa.io
                </li>
              </ul>
            </div>
          </div>

          <div class="border-t border-primary-700 mt-12 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <p class="text-sm mb-4 md:mb-0 text-primary-300">
                © 2025 Tech FA. All rights reserved.
              </p>
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="w-10 h-10 bg-primary-800 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300"
                  ><i
                    class="fab fa-twitter text-primary-200 hover:text-white"
                  ></i
                ></a>
                <a
                  href="#"
                  class="w-10 h-10 bg-primary-800 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300"
                  ><i
                    class="fab fa-linkedin text-primary-200 hover:text-white"
                  ></i
                ></a>
                <a
                  href="#"
                  class="w-10 h-10 bg-primary-800 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300"
                  ><i
                    class="fab fa-github text-primary-200 hover:text-white"
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

const isDark = ref(false);
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

const videoPlayer = ref(null);
const videoPlaceholder = ref(null);
const isVideoPlaying = ref(false);

const playVideo = () => {
  if (videoPlayer.value) {
    if (videoPlayer.value.paused) {
      videoPlayer.value.play();
      isVideoPlaying.value = true;
    } else {
      videoPlayer.value.pause();
      isVideoPlaying.value = false;
    }
  }
};

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark");
};

const handleSubmit = async () => {
  try {
    isSubmitting.value = true;
    submitStatus.value = { success: false, message: "" };

    // Validate form
    if (!form.value.name || !form.value.email || !form.value.message) {
      throw new Error("Please fill in all required fields");
    }

    // Send form data to API
    const response = await $fetch("/api/contact", {
      method: "POST",
      body: { ...form.value, source: "techfa" },
    });

    if (response.status === 200) {
      submitStatus.value = {
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
      };
      // Reset form
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

// Video player functionality
onMounted(() => {
  // Mobile Menu Toggle (if needed in the future)
  // const mobileMenuButton = document.getElementById("mobile-menu-button");
  // const mobileMenu = document.getElementById("mobile-menu");

  // Sticky Header
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("py-2");
      header.classList.add("shadow-md");
    } else {
      header.classList.remove("py-2");
      header.classList.remove("shadow-md");
    }
  });

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
});
// Mobile Menu Toggle
</script>

<style scoped>
/* Hero Animation Keyframes */
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

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
body {
  font-family: "Nunito", sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes floatUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero Section Animations */
.hero-title {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-subtitle {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-buttons {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.hero-stats {
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.hero-visual {
  animation: fadeInRight 0.8s ease-out 0.3s both;
}

.hero-main-card {
  animation: fadeIn 1s ease-out 0.5s both;
}

.hero-floating-card-1 {
  animation: floatUp 0.8s ease-out 0.9s both;
}

.hero-floating-card-2 {
  animation: floatUp 0.8s ease-out 1.1s both;
}

/* Add subtle hover effects */
.hero-buttons a,
.hero-buttons button {
  transition: all 0.3s ease;
}

.hero-buttons a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.hero-buttons button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hero-floating-card-1,
.hero-floating-card-2 {
  transition: transform 0.3s ease;
}

.hero-floating-card-1:hover,
.hero-floating-card-2:hover {
  transform: translateY(-3px);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .hero-visual {
    animation: fadeInUp 0.8s ease-out 0.7s both;
  }
}
</style>

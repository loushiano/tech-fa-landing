<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js',
      crossorigin: 'anonymous',
      referrerpolicy: 'no-referrer'
    }
  ]
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  display: none;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-animate {
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
}

:root {
    /* Semantic colors for dark theme */
    --color-background: #000000;
    --color-foreground: #ffffff;
    --color-muted-foreground: #a1a1aa;

    /* Base colors - Pure black theme */
    --color-base: #000000;
    --color-base-50: #000000;
    --color-base-100: #000000;
    --color-base-200: #1a1a1a;
    --color-base-300: #2a2a2a;
    --color-base-400: #525252;
    --color-base-500: #737373;
    --color-base-600: #a3a3a3;
    --color-base-700: #d4d4d4;
    --color-base-800: #e5e5e5;
    --color-base-900: #f5f5f5;
    --color-base-content: #ffffff;

    /* Primary colors - Vibrant Cyan/Teal for dark theme */
    --color-primary: #22d3ee;
    --color-primary-50: #083344;
    --color-primary-100: #164e63;
    --color-primary-200: #155e75;
    --color-primary-300: #0e7490;
    --color-primary-400: #06b6d4;
    --color-primary-500: #22d3ee;
    --color-primary-600: #67e8f9;
    --color-primary-700: #a5f3fc;
    --color-primary-800: #cffafe;
    --color-primary-900: #ecfeff;
    --color-primary-focus: #06b6d4;
    --color-primary-content: #000000;
    --color-primary-light: #67e8f9;

    /* Secondary colors - Purple accent */
    --color-secondary: #a855f7;
    --color-secondary-50: #2e1065;
    --color-secondary-100: #3b0764;
    --color-secondary-200: #581c87;
    --color-secondary-300: #7e22ce;
    --color-secondary-400: #9333ea;
    --color-secondary-500: #a855f7;
    --color-secondary-600: #c084fc;
    --color-secondary-700: #d8b4fe;
    --color-secondary-800: #e9d5ff;
    --color-secondary-900: #f3e8ff;
    --color-secondary-focus: #9333ea;
    --color-secondary-content: #000000;
    --color-secondary-foreground: #000000;

    /* Accent colors */
    --color-accent: #f472b6;
    --color-accent-50: #500724;
    --color-accent-100: #831843;
    --color-accent-200: #9d174d;
    --color-accent-300: #be185d;
    --color-accent-400: #db2777;
    --color-accent-500: #ec4899;
    --color-accent-600: #f472b6;
    --color-accent-700: #f9a8d4;
    --color-accent-800: #fbcfe8;
    --color-accent-900: #fce7f3;
    --color-accent-focus: #db2777;
    --color-accent-content: #000000;

    /* Neutral colors */
    --color-neutral: #737373;
    --color-neutral-50: #0a0a0a;
    --color-neutral-100: #171717;
    --color-neutral-200: #262626;
    --color-neutral-300: #404040;
    --color-neutral-400: #525252;
    --color-neutral-500: #737373;
    --color-neutral-600: #a3a3a3;
    --color-neutral-700: #d4d4d4;
    --color-neutral-800: #e5e5e5;
    --color-neutral-900: #f5f5f5;
    --color-neutral-focus: #525252;
    --color-neutral-content: #ffffff;

    /* Info colors */
    --color-info: #3b82f6;
    --color-info-50: #1e3a8a;
    --color-info-100: #1e40af;
    --color-info-200: #1d4ed8;
    --color-info-300: #2563eb;
    --color-info-400: #3b82f6;
    --color-info-500: #60a5fa;
    --color-info-600: #93c5fd;
    --color-info-700: #bfdbfe;
    --color-info-800: #dbeafe;
    --color-info-900: #eff6ff;
    --color-info-focus: #2563eb;
    --color-info-content: #000000;

    /* Success colors */
    --color-success: #22c55e;
    --color-success-50: #052e16;
    --color-success-100: #14532d;
    --color-success-200: #166534;
    --color-success-300: #15803d;
    --color-success-400: #16a34a;
    --color-success-500: #22c55e;
    --color-success-600: #4ade80;
    --color-success-700: #86efac;
    --color-success-800: #bbf7d0;
    --color-success-900: #dcfce7;
    --color-success-focus: #16a34a;
    --color-success-content: #000000;

    /* Warning colors */
    --color-warning: #f59e0b;
    --color-warning-50: #451a03;
    --color-warning-100: #78350f;
    --color-warning-200: #92400e;
    --color-warning-300: #b45309;
    --color-warning-400: #d97706;
    --color-warning-500: #f59e0b;
    --color-warning-600: #fbbf24;
    --color-warning-700: #fcd34d;
    --color-warning-800: #fde68a;
    --color-warning-900: #fef3c7;
    --color-warning-focus: #d97706;
    --color-warning-content: #000000;

    /* Error colors */
    --color-error: #ef4444;
    --color-error-50: #450a0a;
    --color-error-100: #7f1d1d;
    --color-error-200: #991b1b;
    --color-error-300: #b91c1c;
    --color-error-400: #dc2626;
    --color-error-500: #ef4444;
    --color-error-600: #f87171;
    --color-error-700: #fca5a5;
    --color-error-800: #fecaca;
    --color-error-900: #fee2e2;
    --color-error-focus: #dc2626;
    --color-error-content: #000000;
}
</style>

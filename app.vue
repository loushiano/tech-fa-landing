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
    /* Light theme - Enterprise Trust Blue */
    --color-background: #FFFFFF;
    --color-foreground: #111827;
    --color-muted-foreground: #6B7280;

    /* Base colors - Light theme */
    --color-base: #FFFFFF;
    --color-base-50: #FFFFFF;
    --color-base-100: #F9FAFB;
    --color-base-200: #F3F4F6;
    --color-base-300: #E5E7EB;
    --color-base-400: #D1D5DB;
    --color-base-500: #9CA3AF;
    --color-base-600: #6B7280;
    --color-base-700: #4B5563;
    --color-base-800: #374151;
    --color-base-900: #1F2937;
    --color-base-content: #111827;

    /* Primary colors - Deep Trust Blue */
    --color-primary: #1E40AF;
    --color-primary-50: #EFF6FF;
    --color-primary-100: #DBEAFE;
    --color-primary-200: #BFDBFE;
    --color-primary-300: #93C5FD;
    --color-primary-400: #60A5FA;
    --color-primary-500: #3B82F6;
    --color-primary-600: #2563EB;
    --color-primary-700: #1D4ED8;
    --color-primary-800: #1E40AF;
    --color-primary-900: #1E3A8A;
    --color-primary-focus: #1D4ED8;
    --color-primary-content: #FFFFFF;
    --color-primary-light: #60A5FA;

    /* Secondary colors - Teal complement */
    --color-secondary: #0D9488;
    --color-secondary-50: #F0FDFA;
    --color-secondary-100: #CCFBF1;
    --color-secondary-200: #99F6E4;
    --color-secondary-300: #5EEAD4;
    --color-secondary-400: #2DD4BF;
    --color-secondary-500: #14B8A6;
    --color-secondary-600: #0D9488;
    --color-secondary-700: #0F766E;
    --color-secondary-800: #115E59;
    --color-secondary-900: #134E4A;
    --color-secondary-focus: #0F766E;
    --color-secondary-content: #FFFFFF;
    --color-secondary-foreground: #FFFFFF;

    /* Accent colors - Indigo */
    --color-accent: #6366F1;
    --color-accent-50: #EEF2FF;
    --color-accent-100: #E0E7FF;
    --color-accent-200: #C7D2FE;
    --color-accent-300: #A5B4FC;
    --color-accent-400: #818CF8;
    --color-accent-500: #6366F1;
    --color-accent-600: #4F46E5;
    --color-accent-700: #4338CA;
    --color-accent-800: #3730A3;
    --color-accent-900: #312E81;
    --color-accent-focus: #4F46E5;
    --color-accent-content: #FFFFFF;

    /* Neutral colors - Light theme */
    --color-neutral: #6B7280;
    --color-neutral-50: #F9FAFB;
    --color-neutral-100: #F3F4F6;
    --color-neutral-200: #E5E7EB;
    --color-neutral-300: #D1D5DB;
    --color-neutral-400: #9CA3AF;
    --color-neutral-500: #6B7280;
    --color-neutral-600: #4B5563;
    --color-neutral-700: #374151;
    --color-neutral-800: #1F2937;
    --color-neutral-900: #111827;
    --color-neutral-focus: #4B5563;
    --color-neutral-content: #FFFFFF;

    /* Info colors */
    --color-info: #3B82F6;
    --color-info-50: #EFF6FF;
    --color-info-100: #DBEAFE;
    --color-info-200: #BFDBFE;
    --color-info-300: #93C5FD;
    --color-info-400: #60A5FA;
    --color-info-500: #3B82F6;
    --color-info-600: #2563EB;
    --color-info-700: #1D4ED8;
    --color-info-800: #1E40AF;
    --color-info-900: #1E3A8A;
    --color-info-focus: #2563EB;
    --color-info-content: #FFFFFF;

    /* Success colors */
    --color-success: #22C55E;
    --color-success-50: #F0FDF4;
    --color-success-100: #DCFCE7;
    --color-success-200: #BBF7D0;
    --color-success-300: #86EFAC;
    --color-success-400: #4ADE80;
    --color-success-500: #22C55E;
    --color-success-600: #16A34A;
    --color-success-700: #15803D;
    --color-success-800: #166534;
    --color-success-900: #14532D;
    --color-success-focus: #16A34A;
    --color-success-content: #FFFFFF;

    /* Warning colors */
    --color-warning: #F59E0B;
    --color-warning-50: #FFFBEB;
    --color-warning-100: #FEF3C7;
    --color-warning-200: #FDE68A;
    --color-warning-300: #FCD34D;
    --color-warning-400: #FBBF24;
    --color-warning-500: #F59E0B;
    --color-warning-600: #D97706;
    --color-warning-700: #B45309;
    --color-warning-800: #92400E;
    --color-warning-900: #78350F;
    --color-warning-focus: #D97706;
    --color-warning-content: #FFFFFF;

    /* Error colors */
    --color-error: #EF4444;
    --color-error-50: #FEF2F2;
    --color-error-100: #FEE2E2;
    --color-error-200: #FECACA;
    --color-error-300: #FCA5A5;
    --color-error-400: #F87171;
    --color-error-500: #EF4444;
    --color-error-600: #DC2626;
    --color-error-700: #B91C1C;
    --color-error-800: #991B1B;
    --color-error-900: #7F1D1D;
    --color-error-focus: #DC2626;
    --color-error-content: #FFFFFF;
}
</style>

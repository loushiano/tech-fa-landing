// https://nuxt.com/docs/api/configuration/nuxt-config
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineNuxtConfig } from "nuxt/config";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  devServer: {
    port: 8000,
  },

  nitro: {
    serverAssets: [
      {
        baseName: "blogs",
        // Nitro resolves this from server/, so a relative ./content/blog misses the posts.
        dir: resolve(rootDir, "content/blog"),
      },
    ],
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Ali Fawaz | Software Engineering Arm for Businesses",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Ali Fawaz is one person, not a company, who can do the work a whole team used to do. 10 years building software, 3 years with the newest AI technologies.",
        },
        {
          name: "keywords",
          content:
            "Ali Fawaz, software engineering arm, newest AI technologies, AI systems integration, business automation, software engineer",
        },
        { name: "author", content: "Ali Fawaz" },
        { name: "robots", content: "index, follow" },

        // Open Graph
        {
          property: "og:title",
          content: "Ali Fawaz | Software Engineering Arm for Businesses",
        },
        {
          property: "og:description",
          content:
            "Ali Fawaz is one person, not a company, who can do the work a whole team used to do. 10 years building software, 3 years with the newest AI technologies.",
        },
        { property: "og:image", content: "https://tech-fa.ca/ali-fawaz.jpg" },
        { property: "og:url", content: "https://tech-fa.ca/" },
        { property: "og:type", content: "profile" },
        { property: "og:site_name", content: "Ali Fawaz" },
        { property: "og:locale", content: "en_US" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Ali Fawaz | Software Engineering Arm for Businesses",
        },
        {
          name: "twitter:description",
          content:
            "A software engineer with 10 years building software and 3 years integrating AI systems. One person, not a company.",
        },
        { name: "twitter:image", content: "https://tech-fa.ca/ali-fawaz.jpg" },

        // Additional SEO
        { name: "theme-color", content: "#0071E3" },
        { name: "msapplication-TileColor", content: "#1E40AF" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/tech-fa-icon.png" },
        { rel: "canonical", href: "https://tech-fa.ca/" },
      ],
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  devServer: {
    port: 8000,
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Tech FA | AI-Powered Business Workflow Automation",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Tech FA automates your business processes and workflows using the newest AI technologies. Free implementation — you only pay per usage. AI email assistant, inbound call AI, and more.",
        },
        {
          name: "keywords",
          content:
            "AI automation, business workflow automation, AI email assistant, AI call assistant, business process automation, AI integration, workflow optimization, Tech FA",
        },
        { name: "author", content: "Tech FA" },
        { name: "robots", content: "index, follow" },

        // Open Graph
        {
          property: "og:title",
          content: "Tech FA | AI-Powered Business Workflow Automation",
        },
        {
          property: "og:description",
          content:
            "We automate your business workflows using the newest AI technologies. Free implementation — you only pay per usage.",
        },
        { property: "og:image", content: "https://tech-fa.ca/tech-fa-full.png" },
        { property: "og:url", content: "https://tech-fa.ca" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Tech FA" },
        { property: "og:locale", content: "en_US" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Tech FA | AI-Powered Business Workflow Automation",
        },
        {
          name: "twitter:description",
          content:
            "We automate your business workflows using AI. Free implementation, pay only per usage.",
        },
        { name: "twitter:image", content: "https://tech-fa.ca/tech-fa-full.png" },

        // Additional SEO
        { name: "theme-color", content: "#1E40AF" },
        { name: "msapplication-TileColor", content: "#1E40AF" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/tech-fa-icon.png" },
        { rel: "canonical", href: "https://tech-fa.ca" },
      ],
    },
  },
});

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
      title: "Tech FA - App Integration & AI Solutions",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Tech FA integrates all your applications together and supercharges them with AI. No data migrations required — we connect directly to your systems.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/tree-logo.png" }],
    },
  },
});

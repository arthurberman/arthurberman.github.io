// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/mdc", "@nuxt/content"],
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        },
      },
    },
  },
  nitro: {
    static: true,
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      ignore: [],
    },
  },
});

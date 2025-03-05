// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/mdc", "@nuxt/content", "./routes-list"],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/content/blog/bkbm.md"],
    },
  },
});

import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: "**/*.md",
      type: "page",
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date(),
      }),
    }),
  },
});

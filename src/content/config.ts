import { defineCollection, z } from "astro:content";

const releases = defineCollection({
  schema: z.object({
    name: z.string(),
    released: z.boolean(),
    orderRelease: z.number(),
    newRelease: z.boolean(),
    linksPlatform: z.object({
      spotify: z.string().url(),
      appleMusic: z.string().url(),
      youtubeMusic: z.string().url(),
      tidal: z.string().url(),
      deezer: z.string().url(),
      amazonMusic: z.string().url(),
    }),
  }),
});

export const collections = { releases };

// src/content/config.ts
import { z, defineCollection} from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title:       z.string(),
      description: z.string(),
      date:        z.date(),
      tags:        z.array(z.string()),
      image:       z.string().optional(),
      pinned:      z.boolean().default(false),
    }),
  }),
};

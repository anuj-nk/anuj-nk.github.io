// src/content/config.ts
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    pinned: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),                         // start or publish date
    updated: z.date().optional(),           // last updated
    summary: z.string(),
    image: z.string().optional(),           // hero/cover
    gallery: z.array(z.string()).optional(),// extra images
    tags: z.array(z.string()).default([]),  // “AI”, “Hardware”, “School”, etc.
    status: z.enum(["planning","in-progress","paused","completed"]).default("in-progress"),
    role: z.string().optional(),            // “PM/Eng/Design”
    org: z.string().optional(),             // “GIX”, “DataBraid”
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    pinned: z.boolean().default(false),     // for homepage pinning
    featured: z.boolean().default(false),   // for projects landing hero
  }),
});

export const collections = { blog, projects };

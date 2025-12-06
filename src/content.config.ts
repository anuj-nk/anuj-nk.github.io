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
    date: z.date(),
    updated: z.date().optional(),

    summary: z.string(),
    tagline: z.string().optional(),            // NEW for project tagline
    team: z.array(z.string()).optional(),      // NEW for team member list

    image: z.string().optional(),
    gallery: z.array(z.string()).optional(),

    tags: z.array(z.string()).default([]),
    status: z.enum(["planning","in-progress","paused","completed"])
             .default("in-progress"),

    role: z.string().optional(),
    org: z.string().optional(),

    repo: z.string().url().optional(),
    demo: z.string().url().optional(),

    pinned: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});


export const collections = { blog, projects };

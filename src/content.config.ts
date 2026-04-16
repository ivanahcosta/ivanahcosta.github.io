import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    emoji: z.string(),
    title: z.string(),
    type: z.string(),
    client: z.string(),
    agency: z.string(),
    date: z.date(),
    roles: z.array(z.string()),
    tech: z.array(z.string()),
    color: z.string(),
    description: z.string(),
    link: z.string(), 
    thumbnail: z.array(z.string()).default([]),
    featured: z.boolean(),
    side: z.boolean(),
    available: z.boolean(),
  }),
});

export const collections = {
  works,
};
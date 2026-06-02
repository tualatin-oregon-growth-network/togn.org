import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('TOGN'),
    tags: z.array(z.string()).default([]),
    videoId: z.string().optional(),
    source: z.string().optional(),
    sourceUrl: z.string().url().optional(),
  }),
});

export const collections = { blog };

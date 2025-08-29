import { defineCollection, z } from 'astro:content';

// Shared article schema (matching existing format)
const articleSchema = z.object({
  id: z.number().optional(),
  title: z.string(),
  summary: z.string(),
  source: z.string().optional(),
  sourceUrl: z.string().url().optional(),
  sourceLinkTitle: z.string().optional(),
  sourceLinkDescription: z.string().optional(),
  timeAgo: z.string().optional(),
  date: z.date(),
  category: z.string().optional(),
  tags: z.array(z.string()).default([]),
  url: z.string().optional(),
  // PagesCMS additional fields
  slug: z.string().optional(),
  author: z.string().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  featured: z.boolean().default(false),
});

// Settings schema
const settingsSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  author: z.string().optional(),
  social: z.object({
    twitter: z.string().optional(),
    github: z.string().optional(),
    email: z.string().email().optional(),
  }).optional(),
  analytics: z.object({
    googleAnalyticsId: z.string().optional(),
    umamiAnalyticsId: z.string().optional(),
  }).optional(),
  seo: z.object({
    ogImage: z.string().optional(),
    keywords: z.array(z.string()).default([]),
  }).optional(),
});

// Content collections
const hopeCollection = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const despairCollection = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const contextCollection = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const settingsCollection = defineCollection({
  type: 'data',
  schema: settingsSchema,
});

export const collections = {
  hope: hopeCollection,
  despair: despairCollection,
  context: contextCollection,
  settings: settingsCollection,
};
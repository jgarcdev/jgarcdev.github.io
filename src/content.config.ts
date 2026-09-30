import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';


const blankToUndefined = (v: unknown) => (v === null || (typeof v === 'string' && v.trim() === '') ? undefined : v);
const optionalUrl = () => z.preprocess(blankToUndefined, z.url().optional());
const optionalDate = () => z.preprocess(blankToUndefined, z.coerce.date().optional());

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: optionalDate(),
		stack: z.array(z.string()).default([]),
		repo: optionalUrl(),
		demo: optionalUrl(),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

const compositions = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/compositions' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		instrumentation: z.string().optional(),
		duration: z.string().optional(),
		audio: z.string().optional(),
		youtube: z.string().optional(),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog, projects, compositions };
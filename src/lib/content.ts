import { getCollection } from 'astro:content';

const visible = (entry: { data: { draft: boolean } }) => import.meta.env.DEV || !entry.data.draft;

export async function getPosts() {
	const posts = await getCollection('blog', visible);

	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getProjects() {
	const projects = await getCollection('projects', visible);

	return projects.sort((a, b) => Number(b.data.featured) - Number(a.data.featured) || (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0));
}

export async function getCompositions() {
	const pieces = await getCollection('compositions', visible);

	return pieces.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit', timeZone: 'UTC' });
}

export function hexDate(date: Date) {
	const hex = (n: number, w: number) => n.toString(16).toUpperCase().padStart(w, '0');

	return `0x${hex(date.getUTCFullYear(), 3)}.${hex(date.getUTCMonth() + 1, 2)}.${hex(date.getUTCDate(), 2)}`;
}
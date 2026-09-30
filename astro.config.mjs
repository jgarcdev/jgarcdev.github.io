// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: "https://jgarcia.github.io",
	markdown: {
		shikiConfig: {
			theme: 'rose-pine',
		},
	},
});
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://Awu12277.github.io',
	base: '/dxw/',
	integrations: [mdx(), sitemap()],
});

// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			$components: path.resolve('./src/lib/components'),
			$styles: path.resolve('./src/lib/styles'),
			$images: path.resolve('./static/images'),
			$videos: path.resolve('./static/videos'),
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

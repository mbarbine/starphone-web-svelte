import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      runtime: 'nodejs20.x'
    }),
    alias: {
      $lib: 'src/lib',
      $components: 'src/lib/components',
      $styles: 'src/lib/styles',
      $images: 'static/images',
      $videos: 'static/videos',
      $utils: 'src/lib/utils',
    },
    prerender: {
      entries: ['*'],
      concurrency: 5,
    }
  }
};

export default config;

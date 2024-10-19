import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess({
    typescript: true,  // Enable TypeScript support
    postcss: true,     // Enable PostCSS for CSS transformations
    scss: {
      prependData: `@import 'src/lib/styles/variables.scss';` // Only if you have SCSS variables
    },
    sourceMap: true,   // Enable source maps for easier debugging
  }),

  kit: {
    adapter: adapter(),
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
    },
    // Remove trailingSlash and vite options
  }
};

export default config;

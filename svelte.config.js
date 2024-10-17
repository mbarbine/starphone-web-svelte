import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

const config = {
  // Preprocess settings for TypeScript, PostCSS, and SCSS
  preprocess: preprocess({
    typescript: true,  // Enable TypeScript support
    postcss: true,     // Enable PostCSS for CSS transformations
    scss: {
      // If you don't need a global SCSS file, just remove prependData
      // Or comment this out if you're not using SCSS variables
      // prependData: `@import 'src/lib/styles/variables.scss';`
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
      entries: ['*'], // Prerender all routes by default
      concurrency: 5, // Limit concurrency for better performance on large builds
    }
  }
};

export default config;

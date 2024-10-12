import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

const config = {
  // Preprocess settings for TypeScript, PostCSS, SCSS, and others
  preprocess: preprocess({
    typescript: true,  // Enable TypeScript support
    postcss: true,     // Enable PostCSS for CSS transformations
    scss: {
      prependData: `@import 'src/lib/styles/variables.scss';` // SCSS global variables, if needed
    },
    sourceMap: true,   // Enable source maps for easier debugging
  }),

  kit: {
    // Adapter for deployment (Vercel in this case)
    adapter: adapter(),

    // Path aliases for easier imports
    alias: {
      $lib: 'src/lib',
      $components: 'src/lib/components',
      $styles: 'src/lib/styles',
      $images: 'static/images',
      $videos: 'static/videos',
      $utils: 'src/lib/utils',
    },

    // Updated prerendering configuration
    prerender: {
      entries: ['*'], // Prerender all routes by default
      concurrency: 5, // Limit concurrency for better performance on large builds
    }
  }
};

export default config;

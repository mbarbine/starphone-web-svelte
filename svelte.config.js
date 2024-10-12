// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

const config = {
    preprocess: preprocess({
        postcss: true,  // Only enable PostCSS if you need it
        scss: true,     // Enable SCSS if you're using it
        typescript: false // Ensure TypeScript is disabled
    }),
    kit: {
        adapter: adapter(),
        alias: {
            $lib: 'src/lib',
            $components: 'src/lib/components',
            $styles: 'src/lib/styles',
            $images: 'static/images',
            $videos: 'static/videos'
        }
    }
};

export default config;

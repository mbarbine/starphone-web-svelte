// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

const config = {
    preprocess: preprocess({
        postcss: true,   // Enable PostCSS if necessary
        typescript: false // Explicitly disable TypeScript preprocessing
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

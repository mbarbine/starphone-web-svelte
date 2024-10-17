import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  
  // Optimize dependencies
  optimizeDeps: {
    exclude: ['colors'], // Exclude unnecessary external modules
  },
  
  resolve: {
    alias: {
      $lib: '/src/lib',
      $components: '/src/lib/components',
      $styles: '/src/lib/styles',
      $images: '/static/images',
      $videos: '/static/videos',
      $utils: '/src/lib/utils'
    }
  },
  
  build: {
    sourcemap: false, // Disable sourcemaps in production for faster builds
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split large node_modules dependencies into separate chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  
  // Enable CSS preprocessor options if needed
  css: {
    preprocessorOptions: {
      scss: {
        // Global SCSS variables (if used, otherwise remove or comment this out)
        //additionalData: `@import 'src/lib/styles/variables.scss';`
      }
    }
  }
});

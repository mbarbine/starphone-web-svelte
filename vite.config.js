import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  optimizeDeps: {
    exclude: ['colors'], // Prevent bundling unnecessary external modules
  },
  build: {
    sourcemap: false, // Disable source maps in production to improve build times
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split large dependencies into separate chunks for better load times
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});

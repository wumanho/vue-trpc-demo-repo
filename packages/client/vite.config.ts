import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/trpc': {
        target: 'http://localhost:3721',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/trpc/, '')
      }
    }
  }
})

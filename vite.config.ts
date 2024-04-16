import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@local/components': '/src/components',
      '@local/layouts': '/src/layouts',
      '@local/assets': '/src/assets',
      '@local/services': '/src/services',
      '@local/utils': '/src/utils',
    },
  },
})
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  base: './',
  resolve: {
    alias: {
      'vue3-drag-split-layout': '../../library',
      '@': fileURLToPath(new URL('./', import.meta.url))
    }
  }
})

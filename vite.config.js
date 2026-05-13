// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  base: '/', // Cambiado de '/Landing-Page/' para despliegue en Firebase (raíz)
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
})

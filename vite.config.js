import { defineConfig } from 'vite'

export default defineConfig({
  base: "/gcs-cd-template/",
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
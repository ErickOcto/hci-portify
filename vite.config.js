import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        uploadcv: resolve(__dirname, 'src/pages/upload-cv.html'),
        aianalysis: resolve(__dirname, 'src/pages/ai-analysis.html'),
        design: resolve(__dirname, 'src/pages/design-selection.html'),
        publish: resolve(__dirname, 'src/pages/publish.html'),
      }
    }
  }
})
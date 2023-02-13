import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'extension/index.ts'),
      fileName: () => 'index.js',
      name: 'postcss-responsive',
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['vscode'],
    },
  },
})

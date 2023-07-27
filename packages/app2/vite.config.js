import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5001,
  },
  preview: {
    port: 5001,
  },
  plugins: [
    react(),
    federation({
      name: 'app2',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './Button': './src/components/Button',
      },
      shared: ['react','react-dom'],
    })
  ],
  build: {
    target: ['chrome89', 'edge89', 'firefox89', 'safari15'],
    cssCodeSplit: false,
    sourcemap: true,
    minify: false
  }
})

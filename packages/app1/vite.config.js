import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  plugins: [
    react(),
    federation({
      name: 'app1',
      remotes: {
        app2: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react','react-dom'],
    })
  ],
  build: {
    target: ['chrome89', 'edge89', 'firefox89', 'safari15'],
  }
})

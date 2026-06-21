import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['coffee.svg', 'app-icon.svg'],
      manifest: {
        name: 'Java Reference',
        short_name: 'Java Ref',
        description: 'Consulta ordenada de sintaxis y funcionamiento de Java.',
        lang: 'es',
        theme_color: '#e76f00',
        background_color: '#16181d',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'app-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: 'app-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Precachea todo lo construido para que funcione sin conexión.
        globPatterns: ['**/*.{js,css,html,svg,woff2}'],
      },
    }),
  ],
  server: {
    port: 5173,
    open: true,
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['assets/images/icon-192.png','assets/images/icon-512.png'],
      manifest: {
        name: 'HexaDeals',
        short_name: 'HexaDeals',
        description: 'Authentic clay cookware and wellness services',
        theme_color: '#0ea5a4',
        icons: [
          { src: 'assets/images/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'assets/images/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  base: "/hexadeals/",
})

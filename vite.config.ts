import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    legacy({
      targets: ['safari >= 14', 'ios_saf >= 14'],
      modernPolyfills: true,
    }),
  ],
  base: '/mbrmj.iq/',
  build: {
    target: ['es2020', 'safari14'],
  },
})

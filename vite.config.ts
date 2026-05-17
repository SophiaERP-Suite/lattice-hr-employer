import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/one/lhr_emp/",
  plugins: [react()],
  server: {
    host: '192.168.1.171',
    port: 5173,
  },
})

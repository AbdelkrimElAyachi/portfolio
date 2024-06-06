import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // By default, Vite uses 'localhost'. Set it to 'true' to allow access from other devices.
    port: 5173 // You can specify the port you want to use.
  }
})

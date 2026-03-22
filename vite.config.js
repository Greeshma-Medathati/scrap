import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Renamed to .js (standard) and kept the logic simple
export default defineConfig({
  plugins: [react()],
})
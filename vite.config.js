import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 判斷開發中，還是產品(production)的路徑
  base: process.env.NODE_ENV === 'production' ? '/202412_vite-project/' : '/',
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/to-do-list-teste-tecnico/frontend/',
  plugins: [react()]
})


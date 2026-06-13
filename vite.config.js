import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The `base` path must match the GitHub Pages repository subpath so that
// assets resolve correctly when served from https://<user>.github.io/ptcb_study/.
// It can be overridden at build time (e.g. for a custom domain) via VITE_BASE.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/ptcb_study/',
  plugins: [react()],
})

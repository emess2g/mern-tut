import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "https://productstorebackend.vercel.app/", //localhost:5000 Replace with your backend server URL if different
        changeOrigin: true, // Ensures the host header matches the target
        secure: false, // If your backend uses HTTPS without a valid certificate
      },
    },
  },
})
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (/react-router|react-dom|\/react\//.test(id)) return "react-vendor";
            if (/zustand|axios/.test(id)) return "state-vendor";
          }
        },
      },
    },
  },
  server: {
    host: true,
    port: 5173,
    // Codespaces/devcontainers proxy everything through https on 443;
    // without this the HMR client tries to open a websocket straight to
    // localhost:5173 from the browser, which fails.
    hmr: {
      clientPort: 443,
    },
  },
});
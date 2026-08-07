import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
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
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Add this line
    port: 5173,
    hmr: {
      host: "localhost",
      clientPort: 5173,
      overlay: true,
    },
    watch: {
      usePolling: true,
    },
  },
});

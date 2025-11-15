import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",   // ensure Vercel sees the build folder
  },
  server: {
    port: 5173,
    open: true,
  }
});

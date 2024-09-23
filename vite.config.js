import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "./dist/stats.html", // Génère un rapport sur la taille des chunks
      open: true, // Ouvre automatiquement le fichier après build
    }),
  ],
  build: {
    chunkSizeWarningLimit: 500, // Limite de taille des chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"], // Divise les dépendances tierces en chunks
        },
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import path from "node:path";

/**
 * Vite build configuration.
 *
 * Build-time performance:
 *   · `manualChunks` splits vendor code (React, Router) into their own
 *     hash-stable chunks. When app code changes, users don't re-fetch
 *     the vendor bundle from cache. When React itself changes, only
 *     that chunk is invalidated.
 *   · `vite-plugin-compression` emits sibling `.gz` and `.br` files
 *     for every JS/CSS/SVG asset. Nginx's `gzip_static` / `brotli_static`
 *     serves them without runtime compression cost — the payload the
 *     browser downloads is ~3–4× smaller than the raw file.
 *   · `target: es2020` lets esbuild skip legacy transforms; browsers
 *     older than that are rounding error in the audience.
 *
 * Dev-time performance:
 *   · `optimizeDeps.include` pre-bundles the hot-path deps so the first
 *     dev-server request doesn't stall while Vite figures out what
 *     needs to be transformed.
 */
export default defineConfig({
  plugins: [
    react(),
    // gzip
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      deleteOriginFile: false,
    }),
    // brotli — smaller, universally supported by modern browsers
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    minify: "esbuild",
    // Small assets inlined as data URIs (favours HTTP/2 push cost).
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Deterministic chunk names so long-term caching works.
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router")) return "vendor-router";
            if (id.includes("react-dom") || id.includes("scheduler")) return "vendor-react-dom";
            if (id.includes("react")) return "vendor-react";
            return "vendor";
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mvsd/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern", // Use the modern Sass API
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
  plugins: [
    vue(),
    viteImagemin({
      plugins: {
        // JPEG optimization
        jpg: imageminMozjpeg({
          quality: 100,
        }),
        // PNG optimization
        png: imageminPngquant({
          quality: [0.8, 1.0],
        }),
        // SVG optimization
        svg: imageminSvgo({
          plugins: [
            {
              name: "removeViewBox",
              active: false,
            },
            {
              name: "removeEmptyAttrs",
              active: false,
            },
          ],
        }),
      },
      // WebP configuration
      makeWebp: {
        plugins: {
          jpg: imageminWebp({
            quality: 100,
            lossless: false,
          }),
          png: imageminWebp({
            quality: 100,
            lossless: false,
          }),
        },
      },
    }),
  ],
  build: {
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    rollupOptions: {
      output: {
        // Optimize chunk splitting for better caching
        manualChunks: {
          vendor: ["vue", "vue-router"],
        },
        // Optimize asset file names for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["vue", "vue-router"],
  },
});

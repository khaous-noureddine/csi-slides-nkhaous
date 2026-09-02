import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    root: "src",
    publicDir: "public",
    base: "./",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, "src/index.html"),
                slides: resolve(__dirname, "src/slidedecks/csi-nkhaous.html"),
            },
        },
    },
});

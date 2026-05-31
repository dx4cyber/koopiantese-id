// vite.config.ts
import { defineConfig } from "@tanstack/start/config";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
var asyncHooksShimPath = path.resolve(__dirname, "./src/shims/async_hooks-client.js");
var vite_config_default = defineConfig({
  vite: {
    plugins: [
      // Force browser bundles to use our shim for node:async_hooks
      {
        name: "shim-async-hooks-browser",
        enforce: "pre",
        resolveId(id) {
          if (id === "node:async_hooks") return asyncHooksShimPath;
        },
      },
      {
        name: "shim-storage-context-client",
        enforce: "pre",
        resolveId(id, importer, options) {
          if (id === "@tanstack/start-storage-context" && !options?.ssr) {
            return path.resolve(__dirname, "./src/shims/storage-context-client.js");
          }
        },
      },
      tsconfigPaths(),
    ],
    resolve: {
      alias: {
        "node:async_hooks": asyncHooksShimPath,
      },
    },
    ssr: {
      noExternal: ["@tanstack/start-storage-context", "node:async_hooks"],
    },
    optimizeDeps: {
      include: ["@tanstack/start-storage-context"],
    },
  },
});
export { vite_config_default as default };

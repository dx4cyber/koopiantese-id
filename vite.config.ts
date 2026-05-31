import { defineConfig } from "@tanstack/start/config";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASYNC_HOOKS_ID = "node:async_hooks";

const asyncLocalStorageEsmShim = `
// Auto-generated shim for browser bundles.
// Provides AsyncLocalStorage export so TanStack Start storage-context can bundle.

export class AsyncLocalStorage {
  constructor() {}
  run(_store, callback) {
    return callback()
  }
  getStore() {
    return undefined
  }
  enterWith(_store) {}
}
`;

export default defineConfig({
  vite: {
    plugins: [
      // Extreme: inline-module shim for `node:async_hooks`.
      // This prevents Vite from externalizing to __vite-browser-external.
      {
        name: "inline-async-hooks-shim",
        enforce: "pre",
        resolveId(id) {
          if (id === ASYNC_HOOKS_ID) return id;
        },
        load(id) {
          if (id === ASYNC_HOOKS_ID) return asyncLocalStorageEsmShim;
        },
      },

      // Redirect storage-context to client-safe implementation.
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
        'node:async_hooks': '/src/shim.js',
      }
    }

    ssr: {
      noExternal: ["@tanstack/start-storage-context", ASYNC_HOOKS_ID],
    },

    optimizeDeps: {
      include: ["@tanstack/start-storage-context"],
    },
  },
});

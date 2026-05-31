// Client-side shim for `@tanstack/start-storage-context`.
//
// The upstream package depends on `node:async_hooks` (AsyncLocalStorage).
// In Vite client bundles, `node:` built-ins are externalized and break the
// build with:
//   "AsyncLocalStorage" is not exported by "__vite-browser-external".
//
// This file provides a minimal compatible API surface so client build can
// complete. Runtime behavior for this app does not rely on the server-only
// storage context.

export const storageContext = {};

export function getStorageContext() {
  return null;
}

export function setStorageContext() {
  // no-op
}

export class AsyncLocalStorage {
  run(store, callback, ...args) {
    return callback(...args);
  }

  getStore() {
    return undefined;
  }

  enterWith() {
    // no-op
  }

  exit(callback, ...args) {
    return callback(...args);
  }
}

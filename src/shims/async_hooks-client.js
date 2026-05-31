// Shim for `node:async_hooks` in the browser bundle.
//
// TanStack Start's `start-storage-context` imports `AsyncLocalStorage` from
// `node:async_hooks`. During client bundle, Vite externalizes Node built-ins,
// which breaks bundling because `__vite-browser-external` doesn't provide
// `AsyncLocalStorage`.
//
// This shim provides a minimal, compatible export for build-time.
// Runtime behavior is not used by this app.

export class AsyncLocalStorage {
  run(_store, callback) {
    return callback();
  }

  getStore() {
    return undefined;
  }

  enterWith(_store) {
    // no-op
  }
}

import { build } from "vite";
import path from "path";

const root = path.resolve("./src");
const outDir = path.resolve("./dist_client_entry");

console.log("root", root);
console.log("outDir", outDir);

const input = { handler: path.join(root, "client.tsx") };

try {
  await build({
    root,
    build: {
      ssr: true,
      ssrManifest: true,
      rollupOptions: {
        input,
      },
      target: "esnext",
      outDir,
      emptyOutDir: true,
    },
    configFile: false,
  });
  console.log("build success");
} catch (err) {
  console.error("build error", err);
  process.exit(1);
}

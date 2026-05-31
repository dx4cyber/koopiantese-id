import defineConfig from "../vite.config.ts";

async function main() {
  const app = await defineConfig();
  console.log("app config routers:");
  for (const r of app.config.routers) {
    console.log({ name: r.name, type: r.type, handler: r.handler, root: r.root, outDir: r.outDir });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

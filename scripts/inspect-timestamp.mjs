import cfg from "../vite.config.timestamp_1780252306240.js";

async function main() {
  console.log("cfg keys:", Object.keys(cfg));
  console.log("cfg.default type:", typeof cfg.default);
  try {
    const app = await cfg.default;
    console.log("has app.config?", !!app?.config);
  } catch (err) {
    console.error("awaiting default failed", err);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

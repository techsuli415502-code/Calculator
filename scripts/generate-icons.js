/**
 * Generate apple-touch-icon.png (180x180) and a smaller favicon PNG (32x32)
 * from favicon.svg so iOS Safari and modern browsers get a nice icon.
 *
 * Run: node /home/z/my-project/scripts/generate-icons.js
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = "/home/z/my-project/public";

async function makePng(svgPath, outPath, size, opts = {}) {
  const svg = fs.readFileSync(svgPath, "utf8");
  await sharp(Buffer.from(svg))
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  const stat = fs.statSync(outPath);
  console.log(`Wrote ${outPath} (${(stat.size / 1024).toFixed(1)} KB)`);
}

async function main() {
  // Apple touch icon (180x180) - uses favicon.svg as source but with a solid background
  // because iOS Safari overlays icons on its own rounded square.
  await makePng(
    path.join(PUBLIC_DIR, "favicon.svg"),
    path.join(PUBLIC_DIR, "apple-touch-icon.png"),
    180
  );
  // Small 32x32 PNG favicon fallback for older browsers
  await makePng(
    path.join(PUBLIC_DIR, "favicon.svg"),
    path.join(PUBLIC_DIR, "favicon-32.png"),
    32
  );
  // 192x192 for PWA manifest
  await makePng(
    path.join(PUBLIC_DIR, "favicon.svg"),
    path.join(PUBLIC_DIR, "icon-192.png"),
    192
  );
  // 512x512 for PWA manifest
  await makePng(
    path.join(PUBLIC_DIR, "favicon.svg"),
    path.join(PUBLIC_DIR, "icon-512.png"),
    512
  );
}

main().catch((err) => {
  console.error("Failed to generate icons:", err);
  process.exit(1);
});

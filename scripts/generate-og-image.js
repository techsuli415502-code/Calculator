/**
 * Generate og-image.png (1200x630) for social sharing previews.
 * SVG OG images are not supported by Twitter / Facebook / LinkedIn,
 * so we render the same design to PNG using sharp.
 *
 * Run: node /home/z/my-project/scripts/generate-og-image.js
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = "/home/z/my-project/public";
const SVG_PATH = path.join(PUBLIC_DIR, "og-image.svg");
const PNG_PATH = path.join(PUBLIC_DIR, "og-image.png");

async function main() {
  const svg = fs.readFileSync(SVG_PATH, "utf8");
  await sharp(Buffer.from(svg))
    .resize(1200, 630, { fit: "cover", position: "center" })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(PNG_PATH);
  console.log("Wrote", PNG_PATH);
  const stat = fs.statSync(PNG_PATH);
  console.log("Size:", (stat.size / 1024).toFixed(1), "KB");
}

main().catch((err) => {
  console.error("Failed to generate OG image:", err);
  process.exit(1);
});

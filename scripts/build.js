const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
fs.writeFileSync(path.join(dist, "index.html"), html);
fs.writeFileSync(
  path.join(dist, "build-info.txt"),
  [
    "CircleCI Cloud CI/CD Lab",
    "Build stage completed successfully.",
    `Built at: ${new Date().toISOString()}`
  ].join("\n") + "\n"
);

console.log("Build completed. Output written to dist/");

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("index.html exists", () => {
  assert.equal(fs.existsSync(path.join(__dirname, "..", "index.html")), true);
});

test("page contains the lab title", () => {
  const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
  assert.match(html, /CircleCI Cloud CI\/CD Pipeline/);
});

test("build script can create a delivery package", async () => {
  const { execFileSync } = require("node:child_process");
  execFileSync(process.execPath, [path.join(__dirname, "..", "scripts", "build.js")], {
    stdio: "pipe"
  });
  assert.equal(fs.existsSync(path.join(__dirname, "..", "dist", "index.html")), true);
  assert.equal(fs.existsSync(path.join(__dirname, "..", "dist", "build-info.txt")), true);
});

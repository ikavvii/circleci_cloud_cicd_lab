const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const port = process.env.PORT || 3000;
const html = fs.readFileSync(path.join(__dirname, "index.html"));

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    return res.end(html);
  }
  res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
  res.end("Not Found");
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

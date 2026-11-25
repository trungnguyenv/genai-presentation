// Serves site/ under /genai-presentation/, like the GitHub Pages project URL,
// so a root-absolute link fails the tests.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, normalize, extname } from "node:path";

const root = join(import.meta.dirname, "..", "site");
const base = "/genai-presentation/";
const port = Number(process.env.PORT ?? 4173);
const types = { ".html": "text/html; charset=utf-8" };

createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://localhost") /* base only for parsing */.pathname);
  if (!path.startsWith(base)) return res.writeHead(404).end();
  let file = normalize(join(root, path.slice(base.length)));
  if (!file.startsWith(root)) return res.writeHead(404).end();
  try {
    if ((await stat(file)).isDirectory()) {
      if (!path.endsWith("/")) return res.writeHead(301, { location: path + "/" }).end();
      file = join(file, "index.html");
    }
    const body = await readFile(file);
    res.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" }).end(body);
  } catch {
    res.writeHead(404).end();
  }
}).listen(port);

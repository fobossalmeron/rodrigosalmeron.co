import enjs from "./_en.js";

const en = JSON.stringify(enjs);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(en);
}

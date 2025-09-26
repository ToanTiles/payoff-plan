// api/index.js
export default function handler(req, res) {
  res.setHeader('X-Frame-Options', 'ALLOWALL');
  res.setHeader('Content-Security-Policy', 'frame-ancestors *;');

  // send your HTML file
  res.sendFile('index.html', { root: process.cwd() });
}

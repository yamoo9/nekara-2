const express = require('express');
const app = express();
const PORT = 5000;

const fs = require('fs');
const apiDirFiles = fs.readdirSync('./api');

/* -------------------------------------------------------------------------- */

app.use(express.static('static'));

app.get('/', (_req, res) =>
  res.send(/* html */ `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>API Server</title>
      <link rel="stylesheet" type="text/css" href="/style.css" />
    </head>
    <body>
      <h1>API Endpoint</h1>
      <nav>
        <ul>
          ${apiDirFiles
            .map((file) => {
              const filename = file.replace(/\.json/, '');
              return /* html */ `<li><a href="/api/${filename}">/api/${filename}</a></li>`;
            })
            .join('')}
        </ul>
      </nav>
    </body>
  </html>
`)
);

apiDirFiles.forEach((file) => {
  const filename = file.replace(/\.json/, '');
  app.get(`/api/${filename}`, (_req, res) => res.send(require(`./api/${file}`)) );
});

app.listen(PORT, () => console.log(`API 서버 구동: http://localhost:${PORT}`));

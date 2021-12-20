require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

/* -------------------------------------------------------------------------- */

const fs = require('fs');
const apiDirFiles = fs.readdirSync('./api');

/* -------------------------------------------------------------------------- */

const app = express();
const router = require('./routes/product-routes');
const PORT = 5000;

/* -------------------------------------------------------------------------- */

app.use(express.json());
app.use('/products', router);
app.use(express.static('static'));

/* -------------------------------------------------------------------------- */

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
  app.get(`/api/${filename}`, (_req, res) =>
    res.send(require(`./api/${file}`))
  );
});

/* -------------------------------------------------------------------------- */

const { MONGODB_ID, MONGODB_PASS } = process.env;

if (MONGODB_ID && MONGODB_PASS) {
  mongoose
    .connect(
      `mongodb+srv://${MONGODB_ID}:${MONGODB_PASS}@cluster0.u7ktp.mongodb.net/sk?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log('데이터베이스에 연결되었습니다.'))
    .catch((error) => console.error(error.message));
}

/* -------------------------------------------------------------------------- */

app.listen(PORT, () => console.log(`API 서버 구동: http://localhost:${PORT}`));

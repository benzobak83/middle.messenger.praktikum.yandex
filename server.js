require("dotenv").config({ path: `process.env` });

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/dist`));

app.get("/*", (req, res) => {
  return res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

app.listen(PORT, () => {
  console.log(`Сервер запущен...  http://localhost:${PORT}/`);
});

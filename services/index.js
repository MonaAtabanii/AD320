const express = require("express");
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.header('statusCode', 200);
  res.send(`<html>
    <h2>Hello World!</h2>
  </html>`);
});

app.listen(port, () => {
  console.log(`Week3 Assignment - app listening at http://localhost:${port}`);
});
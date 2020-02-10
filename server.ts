const express = require('express');
const path = require('path');
import "reflect-metadata";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
);

app.get('/hello', (req, res) => res.send('Hello Worlddd!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

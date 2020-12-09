const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(public + '/index.html'))
});

app.get('*', (req, res) => {
    res.send('404');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
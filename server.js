const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/index.html'));

  // res.send("text");
  // res.json("json");

  // res.status(302).location('http://onet.pl');
  // res.end()

  // res.redirect('http://onet.pl')
});

app.get('/attachment', (req, res) => {
  res.attachment(path.join(__dirname + '/static/file.txt'));
  res.end()
});

app.get('/cookie/clear', (req, res) => {
  res.clearCookie('visitor_name');
  res.send(`Ciasteczka wyczyszczone`)
});

app.get('/cookie/:value', (req, res) => {
  res.cookie('visitor_name', req.params.value, {maxAge: 5*60*1000});
  res.send(`Imie zapisano`)
});


app.get('/:id', (req, res) => {
  console.log(`Pobranie użytkownika o id ${req.params.id}`)
})

app.post('/:id', (req, res) => {
  console.log(`Dodawanie użytkownika o id ${req.params.id}`);
});

app.put('/:id', (req, res) => {
  console.log(`Zmiana użytkownika o id ${req.params.id}`);
});

app.delete('/:id', (req, res) => {
  console.log(`Usuwanie użytkownika o id ${req.params.id}`);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
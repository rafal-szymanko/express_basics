const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/static/index.html'));
// });

// app.get('*', (req, res) => {
//     res.send('404');
// })

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
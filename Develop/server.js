const express = require('express');
const path = require('path');
const app = express();
const api = require('./')
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});
app.get('/api/notes', (req, res) => {
  res.json(params.body);
});
app.post('/api/notes', (req, res) => {
  res.json(req.params.body);
});
app.delete('/api/notes', (req, res) => {
  res.json({ id: req.params.id });
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

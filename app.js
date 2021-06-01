const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World Praful!');
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});
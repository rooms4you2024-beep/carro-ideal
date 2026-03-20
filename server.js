const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>🚗 Carro Ideal</h1><p>A sua app está online!</p>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Carro Ideal</title>
    <style>
      body { font-family: Arial; text-align:center; padding:40px; background:#111; color:white; }
      button { padding:15px; font-size:18px; margin-top:20px; background:orange; border:none; border-radius:10px; }
      input, select { padding:10px; margin:10px; border-radius:8px; border:none; }
    </style>
  </head>
  <body>
    <h1>🚗 Carro Ideal</h1>

    <p>Orçamento:</p>
    <input id="budget" type="number" placeholder="€">

    <p>Pessoas:</p>
    <select id="people">
      <option>1-2</option>
      <option>3-5</option>
      <option>6+</option>
    </select>

    <br>

    <button onclick="calc()">Ver carro ideal</button>

    <h2 id="result"></h2>

    <script>
      function calc() {
        let budget = document.getElementById('budget').value;
        let people = document.getElementById('people').value;

        let result = "Utilitário económico";

        if (people == "6+") result = "SUV Familiar";
        else if (budget > 25000) result = "SUV moderno";
        else if (budget < 10000) result = "Carro usado económico";

        document.getElementById('result').innerText = result;
      }
    </script>
  </body>
  </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor a correr"));

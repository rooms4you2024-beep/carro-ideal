const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carro Ideal</title>
    <style>
      body{font-family:Arial,sans-serif;background:#111827;color:#fff;padding:40px;text-align:center}
      input,select,button{padding:12px;margin:10px;border-radius:10px;border:none}
      button{background:#f59e0b;font-weight:bold;cursor:pointer}
      .box{max-width:700px;margin:auto;background:#1f2937;padding:30px;border-radius:20px}
    </style>
  </head>
  <body>
    <div class="box">
      <h1>🚗 Carro Ideal</h1>
      <p>Teste simples para confirmar que o GitHub e o Render estão a atualizar.</p>

      <div>
        <input id="budget" type="number" placeholder="Orçamento (€)">
      </div>

      <div>
        <select id="people">
          <option value="1-2">1-2 pessoas</option>
          <option value="3-5">3-5 pessoas</option>
          <option value="6+">6 ou mais</option>
        </select>
      </div>

      <div>
        <button onclick="verSugestao()">Ver sugestão</button>
      </div>

      <h2 id="resultado"></h2>
    </div>

    <script>
      function verSugestao() {
        const budget = Number(document.getElementById('budget').value || 0);
        const people = document.getElementById('people').value;
        let resultado = 'Utilitário equilibrado';

        if (budget < 10000) resultado = 'Citadino económico';
        else if (people === '6+') resultado = 'Monovolume / 7 lugares';
        else if (budget > 25000) resultado = 'SUV moderno';

        document.getElementById('resultado').innerText = resultado;
      }
    </script>
  </body>
  </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor ativo na porta ' + PORT));

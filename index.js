const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let tarefas = [];
let contadorId = 1;

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

app.post("/tarefas", (req, res) => {
  const { descricao, status } = req.body;

  if (!descricao || !status) {
    return res.status(400).json({ erro: "Descrição e status são obrigatórios." });
  }

  const novaTarefa = {
    id: contadorId++,
    descricao,
    status,
    dataCriacao: new Date().toISOString()
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

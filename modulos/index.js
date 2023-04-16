const express = require("express");
const bodyParser = require("body-parser");
const { alunos, filtrarPorNome, filtrarPorMedia } = require("./alunos");

const app = express();

app.use(bodyParser.json());

// Rota GET para listar todos os alunos
app.get("/alunos", (req, res) => {
  let resultado = alunos;

  if (req.query.nome) {
    resultado = filtrarPorNome(req.query.nome);
  }

  if (req.query.media) {
    resultado = filtrarPorMedia(req.query.media);
  }

  res.json(resultado);
});

// Rota POST para adicionar um novo aluno
app.post("/alunos/novo", (req, res) => {
  const { nome, matricula, media } = req.body;

  if (!nome || !matricula || !media) {
    return res.status(400).json({ erro: "Dados incompletos" });
  }

  const novoAluno = { nome, matricula, media };
  alunos.push(novoAluno);

  res.json(novoAluno);
});

// Rota POST para deletar um aluno
app.post("/alunos/deletar/:index", (req, res) => {
  const index = req.params.index;
  
  if (index < 0 || index >= alunos.length) {
    return res.status(404).json({ erro: "Aluno não encontrado" });
  }

  alunos.splice(index, 1);

  res.json(alunos);
});

// Rota POST para atualizar um aluno
app.post("/alunos/atualizar/:index", (req, res) => {
  const index = req.params.index;
  
  if (index < 0 || index >= alunos.length) {
    return res.status(404).json({ erro: "Aluno não encontrado" });
  }

  const { nome, media } = req.body;
  const aluno = alunos[index];

  aluno.nome = nome || aluno.nome;
  aluno.media = media || aluno.media;

  res.json(aluno);
});


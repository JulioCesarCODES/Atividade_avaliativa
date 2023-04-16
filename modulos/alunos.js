const alunos = [
    { nome: "João", matricula: 123, media: 8.5 },
    { nome: "Maria", matricula: 456, media: 7.0 },
    { nome: "Pedro", matricula: 789, media: 9.0 },
  ];
  
  function filtrarPorNome(nome) {
    return alunos.filter((aluno) => aluno.nome.toLowerCase().includes(nome.toLowerCase()));
  }
  
  function filtrarPorMedia(media) {
    return alunos.filter((aluno) => aluno.media >= media);
  }
  
  module.exports = {
    alunos,
    filtrarPorNome,
    filtrarPorMedia,
  };
  
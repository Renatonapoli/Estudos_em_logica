// Filter
const numeros = [1, 2, 20, 30, 230];

const numerosFiltrados = numeros.filter((numero) => {
  return numero >= 10;
});

console.log(numeros);
console.log("=====");
console.log(numerosFiltrados);

// FIND
const alunos = ["Matheus", "Lucas", "Henrique"];

const buscaNome = alunos.find((aluno, index) => {
  if (aluno === "Henrique") {
    console.log("O Henrique esta na posição: " + index);
    return aluno;
  }
});

console.log(buscaNome);

// FindIndex

const buscaAluno = alunos.findIndex((aluno) => {
  return aluno === "Henrique";
});

console.log(buscaAluno);

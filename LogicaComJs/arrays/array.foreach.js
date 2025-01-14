// includes
const nomes = ["Lucas", "Ana", "Matheus", "Maria"];

console.log(nomes.includes("Matheus"));

// Foreach
const alunos = ["Lucas", "Ana", "Matheus", "Maria"];

alunos.forEach((aluno) => {
  console.log(`Bem vindo(a) ${aluno}`);
});

const valores = [10, 500, 300];

valores.forEach((valor) => {
  console.log("Valor Ajustado " + (valor + 20));
});

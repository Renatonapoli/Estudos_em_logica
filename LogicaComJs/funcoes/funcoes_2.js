// Funções com parâmetros

function mostraNome(nome) {
  console.log(`Seja bem vindo ${nome} ao sistema`);
}

mostraNome("Renato");

const nota1 = 8;
const nota2 = 10;
const nota3 = 7;
const nome = "Renato";

function calculoMedia(nota1, nota2, nota3, aluno) {
  let media = (nota1 + nota2 + nota3) / 3;
  return `O aluno ${aluno} teve a média ${media}`;
}

const notaRenato = calculoMedia(10, 8, 9, "Renato");
console.log(notaRenato);

const mediaFulano = calculoMedia(5, 10, 8, "Fulano");
console.log(mediaFulano);

//========================

function calculaJuros(valorCapital, taxaJuros, totalPeriodo) {
  let juros = valorCapital * taxaJuros * totalPeriodo;
  return juros;
}

const jurosFinal = calculaJuros(500, 0.02, 10);
console.log(jurosFinal);

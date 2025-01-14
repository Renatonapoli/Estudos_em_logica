// Funções

function mostraNome() {
  console.log("Sela bem vindo ao sistema!");
}

function gerarNumeorAleatorio() {
  return Math.random();
}

let numetoGerado = gerarNumeorAleatorio();
mostraNome();

console.log(numetoGerado);

function dataAtual() {
  const data = new Date();
  return data.getFullYear();
}

const data = dataAtual();
console.log(data);

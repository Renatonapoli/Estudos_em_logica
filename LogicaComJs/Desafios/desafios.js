/*
## Desafio 1 -
-> Crie um array com alguns cargos de uma empresa (por exemplo, "fullstack", "frontend", "backend", "mobile") 

-> Você precisa remover o cargo "backend" da lista de cargos pois esse cargo não está mais disponivel na empresa.

### FEITO
*/
const cargos = ["fullstack", "frontend", "backend", "mobile"];

cargos.splice(2, 1);

console.log(cargos);

/*
## Desafio 2 - 
-> Crie um array com os nomes abaixo:
["Alice", "Lucas", "Carol", "David"];

-> Você está procurando por um nome chamado Henrique caso o nome esteja na lista mostre no console
qual a posição em que esse nome está na sua lista.
-> Caso não encontre esse nome mostre no console o nome procurado e fale que não foi encontrado na lista
*/
const nomes = ["Alice", "Lucas", "Carol", "David"];
let resultadoDaProcura = "";

if (nomes.includes("Henrique")) {
  console.log(nomes.indexOf("Henrique"));
} else {
  console.log("Henrique não foi encontrado na lista");
}

/*
## Desafio 3
Crie um array com esses numeros: [5, 15, 23, 2 ]

- Você deve devolver qual é a soma de todos esses numeros usando foreach
*/

const numeros = [5, 15, 23, 2];
let soma = 0;

numeros.forEach((numero) => {
  soma += numero;
  return soma;
});

console.log(soma);

/*
## Desafio 4
Crie um array com esses numeros: [6, 12, 5, 9, 14, 27]

- Você deve devolver um array com todos os numeros que são multiplos de 3
*/

const maisNumeros = [6, 12, 5, 9, 14, 27];

const numerosMultiplosDeTres = [];

maisNumeros.forEach((numero) => {
  if (numero % 3 === 0) {
    return numerosMultiplosDeTres.push(numero);
  }
});

console.log(numerosMultiplosDeTres);

/*
## Desafio 5
Filtrar Palavras com Mais de 5 Letras usando foreach
const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];

- Você deve devolver um array com todas palavras que possuem mais de 5 letras
 */
const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];
const palavrasFiltradas = [];

palavras.forEach((palavra) => {
  if (palavra.length > 5) {
    palavrasFiltradas.push(palavra);
  }
});

console.log(palavrasFiltradas);
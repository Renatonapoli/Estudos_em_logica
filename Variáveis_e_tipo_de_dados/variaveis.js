//Declaracões

var teste = "teste";
let teste1 = "teste1";
const teste2 = "teste3";

var a1;

console.log("O valor de a é " + a1); // saída "O valor de a é undefined"
// console.log("O valor de a é " + b); // executa uma excepion de erro de
// referência (ReferenciaError)"

var input;
if (input === undefined) {
  // facaIsto();
} else {
  // facaAquilo();
}

// O valor undefined se comporta como false, quando usado em um contexto
// booleano.
var myArray = [];
if (!myArray[0])
  //myFunction();

  // O valor undefined converte-se para NaN quando usado no contexto numérico
  var a2;
console.log(a2 + 2); // Avaliado como NaN

// Quando você avalia uma variável nula, o valor nulo se comporta como 0 em
// contextos numéricos e como false em contextos booleanos.
var n = null;
console.log(n * 32);

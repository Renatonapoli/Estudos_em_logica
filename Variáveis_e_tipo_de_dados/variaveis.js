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

//Vaiável global, aceita fora da função
if (true) {
  var x = 5;
}

console.log(x);

//Declaração de escopo a partir do ECMAScript6
if (true) {
  let j = 5;
}

// console.log(j); // j is not undefined

// VARIÁVEIS DE ELEVAÇÃO

//Exemplo 1
console.log(y === undefined); // exibbe true
var y = 3;

//exemplo 2
var myvar = "my value";

(function () {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

//CONSTANTES

const PI = 3.14;

//CONVERTENDO SETRINGS PARA NÚMEROS

parserInt(); // retorna apenas números inteiros, então seu uso é restrito
// casa decimais.
parseFloat();

//Metódo alternativo de conversão de um número em forma de string é como
// o operador + (operador soma)

//"1.1" + "1.1" = "1.11.1"
//(+"1.1") + (+"1.1") = 2.2 => os parenteses não são obrigatórios.

//Literais

//Array Literal
var coffees = ["French Roast", "Colombian", "Kona"];

// Função anônima

let soma = function (numero1, numero2) {
  return numero1 + numero2;
};

console.log(soma(12, 10));

// Funcao anônima
let multiplicar = (function () {
  console.log(5 * 2);
  return 5 * 2;
})();

// while -> Usado quando você quer repetir um bloco de código enquanto uma condição é verdadeiro

let valor = 0;

while (valor < 5) {
  console.log("Valor atual" + valor);

  valor++;
}

// Do while -> a condição é verificada após a execucão do bloco de código

let contador = 0;

do {
  console.log("Este numero do contador atual é:" + contador);
  contador++;
} while (contador < 2);

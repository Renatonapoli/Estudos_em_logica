/* Splice: 

index (indice): A posição no array onde a operação começará.
Quantidade: O número de elementos a serem removidos a partir daquela posição.
elemento(os) que deseja adicionar naquele index (opcional)
*/

const numeros = [1, 5, 10, 20];

numeros.splice(1, 1, 30);

console.log(numeros);

const nomes = ["Lucas", "Ana", "Matheus", "Maria"];

const resultado = nomes.splice(2, 1, "João");
console.log(resultado);

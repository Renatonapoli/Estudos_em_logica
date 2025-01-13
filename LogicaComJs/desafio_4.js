/* Calculadora de juros simples utiliza a fórmula de juros
 J= p * i * n
onde 
J= Juros
p= Valor presente, principal (capital)
i = Taxa de juros; 
n= Número de períodos (meses)

*/
const p = 300;
const i = 0.3;
const n = 12;

const juros = p * i * n;

console.log(`Os juros calculado é: ${juros}`);

// Média do aluno
/*
  Nota maior do que 7 = aprovado
  Nota menor do que 7 = reprovado
 */

const nota1 = 6;
const nota2 = 10;

const media = (nota1 + nota2) / 2;

if (media >= 7) {
  console.log("Aluno Aprovado");
  console.log(`Sua nota foi: ${media}`);
} else {
  console.log("Aluno Reprovado");
  console.log(`Sua nota foi: ${media}`);
}

// Pratica 2

const produtoValor = 500;
const freteGratis = true;

if (produtoValor >= 100 && freteGratis) {
  console.log("Parabéns você tem o frete grátis nessa compra!");
} else {
  console.log("O frete ficou: R$10");
}

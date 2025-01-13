// Switch (casos)

const codigoPromocao = 510;
let desconto = 0;

switch (codigoPromocao) {
  case 10:
    console.log("Produtos Tênis");
    desconto = 0.03;
    break;
  case 500:
    console.log("Produto camiseta");
    desconto = 0.05;
    break;
  case 510:
    console.log("Produto Eletrônico");
    desconto = 0.08;
    break;
  default:
    console.log("Produto não encontrado");
}

console.log("O valor do desconto é: " + desconto);

const pessoa = {
  nome: "Renato",
  idade: 34,
  cargo: "Frontend",
  saudacao: () => {
    console.log("Olá eu sou o Renato");
  },
};

// console.log(pessoa);
// pessoa.saudacao();

const calcula = {
  soma: (numero1, numero2) => {
    return numero1 + numero2;
  },
};

const resultaSoma = calcula.soma(12, 20);
console.log(resultaSoma);

const subtracao = {
  subtracao: (numero1, numero2) => {
    return numero1 - numero2;
  },
};

const resultadoSubtracao = subtracao.subtracao(50, 25);
console.log(resultadoSubtracao);

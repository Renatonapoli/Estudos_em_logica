const calcula = {
  n1: 15,
  n2: 3,
  soma: function () {
    return this.n1 + this.n2;
  },
  subtracao: function () {
    return this.n1 - this.n2;
  },
};

// calcula.n1 = 100;
// calcula.n2 = 50;

const resultado = calcula.soma();
console.log(resultado);

const resultadoSub = calcula.subtracao();
console.log(resultadoSub);

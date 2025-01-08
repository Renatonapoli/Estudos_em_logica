let num1 = 100;
let num2 = 70;

console.log("A soma dos números é:", (num1 = num2));
console.log("A subtração dos números é:", (num1 = num2));
console.log("A multiplicação dos números é:", (num1 = num2));
console.log("A divisão dos números é:", num1 / num2);

// let array= [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   // console.log(array[i]);
// }

let array = [1, 2, 3, 4, 5];
let numeroMaior = array[0];
let numeroMenor = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > numeroMenor) {
    numeroMaior = array[i];
  } else {
    numeroMenor = array[i];
  }
}

console.log("Número maior:", numeroMaior);
console.log("Número menor:", numeroMenor);

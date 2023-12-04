// Exercício 1

console.log("Resultado do exercício 1\n\n");

const numberInitial = 2148;
let numberOther;

console.log(`O valor da primeira variável é ${numberInitial}`);

numberOther = 21;

console.log(
  `Minha segunda variável vale ${numberOther} e ` +
    `o valor da soma
das minhas duas variáveis é ${numberInitial + numberOther}`
);

numberOther = numberOther ** 2;

console.log(`O valor ao quadrado é ${numberOther}`);

numberOther = numberOther / 3;

console.log(`O valor dividido por 3 é ${numberOther}`);

// Exercício 2

console.log("\n\nResultado do exercício 2\n\n");

const valor1 = false;
const valor2 = true;
const valor3 = false;

const valor1EValor2 = valor1 && valor2 && valor3;
const valor1OUValor2 = valor1 || valor2 || valor3;
const inversoValor1 = !valor1;
const inversoValor2 = !valor2;
const inversoValor3 = !valor3;

console.log(valor1EValor2);
console.log(valor1OUValor2);
console.log(inversoValor1);
console.log(inversoValor2);
console.log(inversoValor3);

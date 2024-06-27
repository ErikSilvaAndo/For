const prompt = require("prompt-sync")();

let maiorNumero = Number(prompt("Digite o seu número:"));
let menorNumero = maiorNumero;

for (let i = 2; i <= 5; i++) {
  let numero = Number(prompt("Digite o seu número:"));

  if (numero > maiorNumero) {
    maiorNumero = numero;
  }

  if (numero < menorNumero) {
    menorNumero = numero;
  }
}

console.log("O maior número é: " + maiorNumero);
console.log("O menor número é: " + menorNumero);

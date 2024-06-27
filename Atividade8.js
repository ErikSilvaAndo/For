const prompt = require("prompt-sync")();

const x = Number(prompt("Digite um número: "));
let numero = 0;
for (let i = 1; i <= x; i++) {
  if (x % i == 0) {
    numero++;
    console.log(i, x);
  }
}
if ((numero = 2)) {
  console.log("Primo");
} else console.log("Não primo");

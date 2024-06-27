const prompt = require("prompt-sync")();
let media = 0;

for (let i = 1; i <= 10; i++) {
  let x = Number(prompt("Digite um número maior que 0: "));
  media = media + x;
}
let z = media / 10;
console.log(z);

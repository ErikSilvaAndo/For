const prompt = require("prompt-sync")();

let x = Number(prompt("Digite um número maior que 0: "));

for (let i = 1; i <= x; i++) {
  let arteristicos = "*".repeat(2 * i - 1);
  let espaços = " " + "     ".repeat(x - i);
  console.log(espaços + arteristicos);
}

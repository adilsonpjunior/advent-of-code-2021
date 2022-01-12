import { readInputNumeric, readInputString } from "../util.js";

const input = readInputString(process.cwd() + "/src/day03/input.txt");

function flipBits(n) {
  return parseInt(
    n
      .toString(2)
      .split("")
      .map((bit) => 1 - bit) // Para cada ocorrencia da string faz o calculo 1 - bit ( 1 - 0 = 1; 1 - 1 = 0)
      .join(""),
    2
  );
}

let binaryOccur = [];

let gammaRate = "";
let epsilonRate = "";

console.log("== Parte 1 ==");

let binaryLength = input[0].split("");

for (const i in binaryLength) {
  binaryOccur.push([0, 0]);
}

for (const binaryNumber of input) {
  let binaryArray = binaryNumber.split(""); // Separa binarios dentro de um array

  for (let i = 0; i < binaryArray.length; i++) {
    binaryArray[i] == "0" ? binaryOccur[i][0]++ : binaryOccur[i][1]++; // Armazena em outro array o numero de ocorrecias de cada bit
  }
}

for (const binaryValue of binaryOccur) {
  binaryValue[0] > binaryValue[1] ? (gammaRate += "0") : (gammaRate += "1"); // Compara qual ocorrencia teve maior numero e monta nova string
}

epsilonRate = flipBits(gammaRate); // Invert bits
gammaRate = parseInt(gammaRate, 2); // converte pra int

console.log(gammaRate * epsilonRate);

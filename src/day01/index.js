import { readInputNumeric, readInputString } from "../util.js";

const input = readInputNumeric(process.cwd() + "/src/day01/input.txt");

function countIncrease(array) {
  let increased = 0;

  for (let i = 1; i < array.length; i++) {
    // Inicia no segundo numero
    increased += array[i] > array[i - 1] ? 1 : 0;
  }

  return increased;
}

console.log("Parte 1");

console.log(countIncrease(input));

console.log("Parte 2");

let measurementsPoints = [];

for (let i = 0; i < input.length - 2; i++) {
  let soma = input[i] + input[i + 1] + input[i + 2];
  measurementsPoints.push(soma);
}

console.log(countIncrease(measurementsPoints));

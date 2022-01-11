import { readInputNumeric } from '../util.js';

const input = readInputNumeric(process.cwd() + "/src/day01/input.txt");

let increased = 0;

for (let i = 1; i < input.length; i++) {
  // Inicia no segundo numero
  increased += input[i] > input[i - 1] ? 1 : 0;
}

console.log(increased);
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

function determineBinaryOccur(inputF, binaryLengthF) {
  let binaryOccurF = [];

  for (const i in binaryLengthF) {
    binaryOccurF.push([0, 0]);
  }

  for (const binaryNumber of inputF) {
    let binaryArray = binaryNumber.split(""); // Separa binarios dentro de um array

    for (let i = 0; i < binaryArray.length; i++) {
      binaryArray[i] == "0" ? binaryOccurF[i][0]++ : binaryOccurF[i][1]++; // Armazena em outro array o numero de ocorrecias de cada bit
    }
  }

  return binaryOccurF;
}

let binaryOccur = [];

let gammaRate = "";
let epsilonRate = "";

console.log("== Parte 1 ==");

let binaryLength = input[0].split("");

binaryOccur = determineBinaryOccur(input, binaryLength);

for (const binaryValue of binaryOccur) {
  binaryValue[0] > binaryValue[1] ? (gammaRate += "0") : (gammaRate += "1"); // Compara qual ocorrencia teve maior numero e monta nova string
}

epsilonRate = flipBits(gammaRate); // Invert bits
gammaRate = parseInt(gammaRate, 2); // converte pra int

console.log(gammaRate * epsilonRate);

console.log("== Parte 2 ==");

function getOxygenGenerator(inputF, binaryLengthF) {
  let binaryOccurF = [];
  let oxygenGenerator = [];
  let lastOxygenGenerator = inputF;

  binaryOccurF = determineBinaryOccur(inputF, binaryLengthF);

  for (const binaryPosition in binaryOccurF) {
    let bitCriteria;
    oxygenGenerator = [];

    binaryOccurF[binaryPosition][0] > binaryOccurF[binaryPosition][1]
      ? (bitCriteria = "0")
      : (bitCriteria = "1");

    for (const binaryNumber of lastOxygenGenerator) {
      let binaryArray = binaryNumber.split(""); // Separa binarios dentro de um array
      binaryArray[binaryPosition] == bitCriteria
        ? oxygenGenerator.push(binaryNumber)
        : false;
    }

    lastOxygenGenerator = oxygenGenerator;
    binaryOccurF = determineBinaryOccur(oxygenGenerator, binaryLengthF);

    if (oxygenGenerator.length == 1) break; // Interrompe processamento quando encontrar ultimo valor
  }

  return oxygenGenerator[0];
}

function getCo2Scrubber(inputF, binaryLengthF) {
  let binaryOccurF = [];
  let Co2Scrubber = [];
  let lastCo2Scrubber = inputF;

  binaryOccurF = determineBinaryOccur(inputF, binaryLengthF);

  for (const binaryPosition in binaryOccurF) {
    let bitCriteria;

    Co2Scrubber = [];

    binaryOccurF[binaryPosition][0] <= binaryOccurF[binaryPosition][1]
      ? (bitCriteria = "0")
      : (bitCriteria = "1");

    for (const binaryNumber of lastCo2Scrubber) {
      let binaryArray = binaryNumber.split(""); // Separa binarios dentro de um array
      binaryArray[binaryPosition] == bitCriteria
        ? Co2Scrubber.push(binaryNumber)
        : false;
    }

    lastCo2Scrubber = Co2Scrubber;
    binaryOccurF = determineBinaryOccur(Co2Scrubber, binaryLengthF);

    if (Co2Scrubber.length == 1) break; // Interrompe processamento quando encontrar ultimo valor
  }

  return Co2Scrubber[0];
}

let oxygenGenerator = parseInt(getOxygenGenerator(input, binaryLength), 2);
let Co2Scrubber = parseInt(getCo2Scrubber(input, binaryLength), 2);

console.log(oxygenGenerator * Co2Scrubber);

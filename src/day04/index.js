import { readInputNumeric, readInputString } from "../util.js";

const input = readInputString(process.cwd() + "/src/day04/input.txt");

const numbersDraw = input[0].split(",");

let [dummy1, dummy2, ...boards] = input;

// Montagem array dos Boards de forma independente
function GenerateBoards(boards) {
  let boardsGallery = [];
  boardsGallery.push([]);

  for (const board of boards) {
    if (board == "") {
      boardsGallery.push([]);
      continue;
    }

    let line = board.trim();

    boardsGallery[boardsGallery.length - 1].push(
      line.replace(/  /g, " ").split(" ")
    );
  }

  return boardsGallery;
}

// Busca Vencedor
function findWinner(setBoards, numbersDraw) {
  let calculo = 0;

  numbersDraw.forEach((Number) => {
    if (calculo != 0) {
      // Calcula valor e sair
      return;
    }

    for (let i = 0; i < setBoards.length; i++) {
      if (calculo != 0) return;
      for (let linha = 0; linha < 5; linha++) {
        if (calculo != 0) return;
        for (let coluna = 0; coluna < 5; coluna++) {
          if (calculo != 0) return;
          if (setBoards[i][linha][coluna] == Number) {
            setBoards[i][linha][coluna] = "X";

            // Após Marcar, Verifica se a linha ganhou
            let CheckWin = setBoards[i][linha].filter((win) => win != "X");
            if (CheckWin.length == 0)
              calculo = calculaVencedor(setBoards[i], Number);
            else {
              // Se a linha nao ganhou, Verifica se a coluna ganhou
              CheckWin = [];
              for (let l = 0; l < 5; l++) {
                CheckWin.push(setBoards[i][l][coluna]);
              }
              CheckWin = CheckWin.filter((win) => win != "X");
            }
          }
        }
      }
    }
  });

  return calculo;
}

// Calcula valor do vencedor
function calculaVencedor(setBoards, Number) {
  let soma = 0;
  let numero;
  for (let linha = 0; linha < setBoards.length; linha++) {
    for (let coluna = 0; coluna < setBoards[linha].length; coluna++) {
      if (setBoards[linha][coluna] != "X") {
        numero = setBoards[linha][coluna];
        parseInt(numero);
        soma += +numero;
      }
    }
  }

  return soma * +Number;
}

console.log("== Parte 1 ==");

let setBoards = GenerateBoards(boards);

let calculo = findWinner(setBoards, numbersDraw);

console.log(calculo);

import { readInputNumeric, readInputString } from "../util.js";

const input = readInputString(process.cwd() + "/src/day02/input.txt");

let horizontal = 0
let depth = 0

for(let i = 0; i < input.length; i++){
    let command = input[i].split(" ");
    let valueToNumber = Number(command[1])

    horizontal += (command[0] == 'forward' ? valueToNumber : 0 )
    depth += (command[0] == 'down' ? valueToNumber : 0 )
    depth -= (command[0] == 'up' ? valueToNumber : 0 )

}
console.log("== Parte 1 ==")
console.log(horizontal * depth)

let aim = 0
horizontal = 0
depth = 0 

function calculateDepth(horizontal, aim) {
    return horizontal * aim;
  }
  
  for (let i = 0; i < input.length; i++) {
    let command = input[i].split(" ");
    let valueToNumber = Number(command[1]);
  
  //   depth += command[0] == "forward" ? calculateDepth(valueToNumber, aim) : 0;
  //   horizontal += command[0] == "forward" ? valueToNumber : 0;
  //   aim += command[0] == "down" ? valueToNumber : 0;
  //   aim -= command[0] == "up" ? valueToNumber : 0;
  
    switch (command[0]) {
      case "forward":
        depth += calculateDepth(valueToNumber, aim);
        horizontal += valueToNumber;
        break;
      case "down":
        aim += valueToNumber;
        break;
      case "up":
        aim -= valueToNumber;
        break;
    }
  }
  
  console.log("== Parte 2 ==")
  console.log(horizontal * depth);
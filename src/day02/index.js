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

console.log(horizontal * depth)
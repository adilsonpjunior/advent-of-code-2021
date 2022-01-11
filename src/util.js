import { readFileSync } from 'fs'

export const readInputNumeric = (filepath) => {
  const text = readFileSync(filepath, 'utf-8')
  return text.split('\n').map((el) => +el);
}

export const readInputString = (filepath) => {
  const text = readFileSync(filepath, 'utf-8')
  return text.split('\n') //.map((el) => +el);
}
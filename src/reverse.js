const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let reversed = "";
let integer = 0

do{
  number = Number(readlineSync.question("Positive integer: "));
}  while (number < Number.MIN_SAFE_INTEGER || number > Number.MAX_SAFE_INTEGER || Number.isNaN(number) || number % 1 != 0 || number <= 0)

do {
  integer = number % 10;
  reversed = reversed + integer + ", ";
  number = number - integer
  number = number/10;

} while (number > 10);

reversed = reversed + number + "."
console.log("\n" + reversed + '.');

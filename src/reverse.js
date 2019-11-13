const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

const POSITIVE_INTEGER = Number(readlineSync.question("\nEnter a number: "));


if
  (POSITIVE_INTEGER !== MIN){
    console.log("Enter a number")
  }

if (Number.isNaN(POSITIVE_INTEGER)){
  console.log("\nInvalid.\n");
}

const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER ;
const MAX = Number.MAX_SAFE_INTEGER ;

let lowerBound = Number(readlineSync.question("\nLower board: "));
let upperBound = Number(readlineSync.question("Upper bound: "));
let sum = 0;
let secondSum = 0;


while (lowerBound > upperBound){
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}

while (lowerBound > upperBound){
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}

if (lowerBound % 2 === 0){
  for (secondSum = lowerBound; secondSum <= upperBound; secondSum = secondSum + 2){
    sum = secondSum + sum;
  }
}

else if (lowerBound % 2 !== 0){
  for (secondSum = lowerBound + 1; secondSum <= upperBound; secondSum = secondSum + 2){
    sum = secondSum + sum;
  }
}

sum = sum.toLocaleString("en");
console.log("\n" + sum + ".");

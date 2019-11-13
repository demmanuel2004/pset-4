const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positiveInteger = Number(readlineSync.question("Upper bound: "));
let positiveIntegerSecond = Number(readlineSync.question("Lower board: "));
let positiveIntegerThird = Number(readlineSync.question("Upper board: "));

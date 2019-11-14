const readlineSync = require("readline-sync");
const NUM = Number(readlineSync.question("\nPositive integer: "));

const MIN = Number.MIN_SAFE_INTEGER ;
const MAX = Number.MAX_SAFE_INTEGER ;

if ( NUM % 2 !==0) {
	console.log("\nEven.\n");
}

let number = 0;

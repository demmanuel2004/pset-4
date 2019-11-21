const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER ;
const MAX = Number.MAX_SAFE_INTEGER ;

let value = 0;
let isPrimeNumber = true;

while (value <= 0 || value > MAX) {
value = readlineSync.question("Positive integer: ");

let num = parseInt( value );

for( var i = 0; i < num; i++ ) {
if( num % i == 0) {
 isPrimeNumber = false;
console.log(i);
}
}

}
if( isPrimeNumber) {
console.log("\nPrime.");
} 

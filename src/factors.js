

const MIN = Number.MIN_SAFE_INTEGER ;
const MAX = Number.MAX_SAFE_INTEGER ;

let value = -1;
let isPrimeNumber = true;

while (value <= 0 ) {
value = readlineSync.question("Positive integer: ");

let num = parseInt( value );

for( var i = 2; i < num; i++ ) {
if( num % i == 0) {
isPrimeNumber = false;
break;
}
}

}

if( isPrimeNumber) {
console.log("\nPrime.");
} else {
console.log(i);
}

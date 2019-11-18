let value = -1;
let isPrime = true;

while (value <= 0 ) {
value = readlineSync.question("Non-Negative integer: ");

let num = parseInt( value );

for( var i = 2; i < num; i++ ) {
if( num % i == 0) {
isPrime = false;
break;
}
}

}

if( isPrime) {
console.log("\nPrime.");
} else {
console.log("\nNot Prime.");
}

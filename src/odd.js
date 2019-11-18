const readlineSync = require("readline-sync");

let sum = 0;
let value = 0;
while (value <= 0) {
value = readlineSync.question("Positive Integer: "); //345
let num = value;
while ( num > 0 )
{
let n = num % 10 ; // n = 5 , 4 ,3
if( n % 2 != 0)
{
sum = sum + n; // 5 +3
}
num = parseInt( num / 10 ); //34 , 3 ,0
}

}

console.log("\n" + sum + '.');

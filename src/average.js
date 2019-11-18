const readlineSync = require("readline-sync");

let count = 0; //how many numbers
let sum = 0; //sum of numbers
let value = 0;

while (value >= 0) {
value = readlineSync.question("Non-Negative integer: ");

num = parseInt (value) ;

if( num >= 0) {
count++;
sum += num; // sum = sum+num
}
}

avg = sum / count;
avg = avg.toLocaleString(undefined, {minimumFractionDigits:3} );
console.log("\n" + avg + '.');

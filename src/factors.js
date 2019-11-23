const readlineSync = require("readline-sync");
let value = 0;

while (value <= 0) {
value = readlineSync.question("Positive integer: ");
num = parseInt(value);

limit = Math.sqrt(num);
//81 ,limit =9

factors = '';

for (var i = 1; i <= limit; i++) { //i=1,i=2,i=3 , i=4 , i=5 , i=6 , i=7 , i=8 , i=9 , i=27
if (num % i == 0) { //81%1 =0
smallNum = i; //smallnum=1 , 3 ,9 , 27
largeNum = num / i; //largenum=81 27 , 9 , 3

if (factors.length == 0) {
factors = i; // factors = 1,
} else {
factors += ',' + smallNum;
}

if (smallNum != largeNum) {
factors += ',' + largeNum; //factors = 1,81,
}
}
}

console.log(factors);
}

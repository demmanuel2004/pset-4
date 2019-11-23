const readlineSync = require("readline-sync");

let value = 0;
let heightRight;
let heightLeft;


while (value < 1 || value > 24) {
value = readlineSync.question("Height: ");

num = parseInt(value);

if (num > 0 && num <= 24) { //num=7

for (i = 1; i <= num; i++) {//1-7
var spaces = num - i; //i=1 , spaces =7-1=6
var hashes = i + 1; //i=1 ,hashes=1+1=2

var spaceText = '';
var hashText = '';

for( j = 1; j <= spaces; j++) {
spaceText += ' ';
}
for( j = 1; j <= hashes; j++ ) {
hashText += '#';
}
console.log(spaceText + hashText); 
}
}
}

const readlineSync = require("readline-sync");
const NUM = Number(readlineSync.question("\nPositive integer: "));


const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let num = "";
let endSum = 0;


if (num % 2 !==0){
 do {
endSum = num % 2 !==0;
num = num + endSum + ", ";
num = num - endSum
num= num/10;

}

 while (number > 10);

num = num + endSum + "."

console.log(num);}





const readlineSync = require("readline-sync");
const NUM = Number(readlineSync.question("\nPositive integer: "));


const MIN = Number.MIN_SAFE_INTEGER ;
const MAX = Number.MAX_SAFE_INTEGER ;
let endSum = 0;

  
  for (let endSum = 1; endSum < NUM; endSum++) {
    
    if(endSum % 2 !== 0) {
     
      console.log(endSum);
    }
  }

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

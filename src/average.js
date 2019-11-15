const readlineSync = require("readline-sync");

console.log("Enter non-negative integers.\n")
console.log("Enter -1 to stop.\n");

let sum = 0;
let value = 0;
while (value !== -1) {
    value = readlineSync.question("Enter value: ");
    
    if (value !== -1) {
        sum = sum + value;
    }
}
        
console.log("\nSum: " + sum);

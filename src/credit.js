const readlineSync = require("readline-sync");

let value = 0;
while (value <= 0)
{
value = readlineSync.question("Number: ");
let num = parseInt ( value );
if( num < 0)
{
continue;
}
num = num.toString();
let firstTwoDigits = num.substr(0, 2);
let firstDigit = num.substr(0, 1);
let length = num.length;
if (length == 15)
{
if (firstTwoDigits == 34 || firstTwoDigits == 37)
{
var evenSum = 0;
var oddSum = 0;
for (var i = 0 ; i < length ; i++)
{
if (i % 2 != 0)
{
var number = num.charAt(i) * 2;
var sum = 0;
while (number)
{
sum += number % 10;
number = Math.floor(number / 10);
}
evenSum += sum;
}
else
{
oddSum += num.charAt(i) * 1;

}
}
var totalSum = evenSum + oddSum ;

if ( totalSum % 10 == 0)
{
console.log("AMEX");
}
else
{
console.log("Invalid.");
}

} }
else
{
console.log("invalid");
}

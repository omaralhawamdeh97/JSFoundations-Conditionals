const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const num1 = parseInt(prompt("Enter the first number "));
const num2 = parseInt(prompt("Enter the second number"));
 
const operation = prompt("Enter the operation ");

if (isNaN(num1)) {
    console.log("Invalid Input");
}
if (isNaN(num2)) {
    console.log("Invalid Input");
}


if ( operation === '+')
console.log(num1+num2);

if ( operation === '-')
console.log(num1-num2);

if ( operation === '/')
console.log(num1/num2);

if ( operation === '*')
console.log(num1*num2);
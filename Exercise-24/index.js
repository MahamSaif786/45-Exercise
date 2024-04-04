/*More Conditional Tests:
You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array*/
// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;
// Test whether the random number is even or odd
console.log("The randomly generated number is ".concat(randomNumber, "."));
if (randomNumber % 2 === 0) {
    console.log("It is an even number!");
}
else {
    console.log("It is an odd number!");
}

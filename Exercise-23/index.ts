/*                          Exercise-23
Conditional Tests:  Write a series of conditional tests. Print a statement describing each test and your prediction 
for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car == 'toyota'? I predict False.");
console.log(car === 'toyota');

let age: number = 25;
console.log("Is age greater than 18? I predict True.");
console.log(age > 18);

console.log("Is age less than 18? I predict False.");
console.log(age < 18);

let isSunny: boolean = true;
console.log("Is it sunny? I predict True.");
console.log(isSunny);

let isRaining: boolean = false;
console.log("Is it raining? I predict False.");
console.log(isRaining);

let fruit: string = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit === 'apple');

console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit === 'banana');

let x: number = 5;
let y: number = 10;
console.log("Is x not equal to y? I predict True.");
console.log(x !== y);

let z: number = 7;
console.log("Is z equal to 7? I predict True.");
console.log(z === 7);

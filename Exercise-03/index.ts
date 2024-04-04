/*                                  Exercise-3
 Name Cases:Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
and titlecase.*/


const personName: string ="Maham Saif";

 //lowercase

console.log(personName.toLocaleLowerCase());

//uppercase

console.log(personName.toLocaleUpperCase());

//titlecase

let firstLetter: string = personName.charAt(0).toUpperCase();
let restLetter: string =  personName.slice(1).toLowerCase();

let titlecase = firstLetter + restLetter;
console.log(titlecase);
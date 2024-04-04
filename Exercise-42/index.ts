/*                                 Exercise-42
Great Magicians:Start with a copy of your program from Exercise 41. Write a function called make_great() that 
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
show_magicians() to see that the list has actually been modified.*/

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

let great_magicians: string[] = make_great(magicians);

show_magicians(great_magicians);

/*                                    Exercise-41
Magicians:Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
prints the name of each magician in the array*/

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

show_magicians(magicians);

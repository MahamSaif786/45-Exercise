/*                          Exercise-37
Large Shirts: 
Modify the make_shirt() function so that shirts are large by default, with a message that reads 
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
size with a different message*/

function make_shirt(message: string = "I love TypeScript", size: string = "Large"): void {
    console.log(`Creating a ${size} shirt with the message: "${message}".`);
}

make_shirt();

make_shirt("I love TypeScript", "Medium");

make_shirt("TypeScript is awesome!", "Small");

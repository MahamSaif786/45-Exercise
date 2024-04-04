/*                              Exercise-25
Alien Colors #1:Imagine an alien was just shot down in a game. Create a variable called alien_color and assign 
it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.*/

// Failing version
let alienColorFail: string = 'red'; // Assigning the alien's color to 'red'

// Checking if the alien's color is green
if (alienColorFail === 'green') {
    console.log("The player just earned 5 points!"); // Printing a message
} else {
    console.log("The alien's color is not green."); // Indicating that the alien's color is not green
}

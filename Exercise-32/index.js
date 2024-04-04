/*                          Exercise-32
Checking Usernames:Do the following to create a program that simulates how websites ensure that everyone has a
unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames
are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print
a message that the person will need to enter a new username. If a username has not been used, print
a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be
accepted*/
//List of current users
var current_users = ['john', 'alice', 'eric', 'mary', 'bob'];
// List of new users
var new_users = ['Eric', 'Jane', 'ALICE', 'steve', 'michael'];
// Loop through new_users list
new_users.forEach(function (new_username) {
    // Check if the new username is already in use (case-insensitive)
    var isUsernameTaken = current_users.some(function (current_username) { return current_username.toLowerCase() === new_username.toLowerCase(); });
    // Print message based on the result
    if (isUsernameTaken) {
        console.log("Sorry, ".concat(new_username, " is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! ".concat(new_username, " is available."));
    }
});

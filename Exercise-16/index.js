/*                           Exercise-16
 More Guests:You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var myFriends = ["Babar Azam", "Saim Ayub", "Naseem Shah", "Shaheen Shah Afridi", "Shadab Khan"];
console.log("We have three more friends to invite on dinner\n");
// add at beginning
myFriends.unshift("Haris Rauf");
console.log(myFriends);
// add at middle
myFriends.splice(2, 0, "Nafay");
console.log(myFriends);
// add at last
myFriends.push("Imad Waseem");
console.log(myFriends);
for (var i = 0; i < myFriends.length; i++) {
    console.log("Mr. ".concat(myFriends[i], " you are invited to my dinner"));
}

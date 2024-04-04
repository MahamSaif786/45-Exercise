/*                             Exercise-15
Changing Guest List:You just heard that one of your guests can’t make the dinner, so you need to send out a new
set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person
you are inviting.
• Print a second set of invitation messages, one for each person who is still
in your list.*/
var myFriend = ["Babar Azam", "Saim Ayub", "Naseem Shah", "Shaheen Shah Afridi", "Shadab Khan"];
var guestWhoCantMakeIt = myFriend.splice(2, 1, "Fakhar Zaman")[0];
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner.\n"));
console.log("Updated Guest List:");
myFriend.forEach(function (guest, index) { return console.log("".concat(index + 1, ". ").concat(guest)); });
console.log("\nSecond Set of Invitation Messages:");
myFriend.forEach(function (guest) { return console.log("Dear ".concat(guest, ",\nYou are cordially invited to a dinner party at my place.\n")); });

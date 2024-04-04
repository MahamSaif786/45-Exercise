/*                             Exercise-15
Changing Guest List:You just heard that one of your guests can’t make the dinner, so you need to send out a new 
set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating 
the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
you are inviting.
• Print a second set of invitation messages, one for each person who is still
in your list.*/



const myFriend: string[] = ["Babar Azam", "Saim Ayub", "Naseem Shah", "Shaheen Shah Afridi", "Shadab Khan"];

const guestWhoCantMakeIt: string = myFriend.splice(2, 1, "Fakhar Zaman")[0]; 

console.log(`${guestWhoCantMakeIt} can't make it to the dinner.\n`);

console.log("Updated Guest List:");
myFriend.forEach((guest, index) => console.log(`${index + 1}. ${guest}`));

console.log("\nSecond Set of Invitation Messages:");
myFriend.forEach((guest) => console.log(`Dear ${guest},\nYou are cordially invited to a dinner party at my place.\n`));

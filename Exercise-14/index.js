/*                               Exercise-14
Guest List:If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
includes at least three people you’d like to invite to dinner. Then use your list to print a message to
each person, inviting them to dinner.*/
var myFriend = ["Babar Azam", "Saim Ayub", "Naseem Shah", "Shaheen Shah Afridi", "Shadab Khan"];
for (var i = 0; i < myFriend.length; i++) {
    console.log("Mr.".concat(myFriend[i], "! you are invited to my dinner on Sunday"));
}

/*                                 Exercise-42
Great Magicians:Start with a copy of your program from Exercise 41. Write a function called make_great() that
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified.*/
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
var great_magicians = make_great(magicians);
show_magicians(great_magicians);

/*
Exercise:43 =  Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians2(magicians) {
    magicians.forEach(function (magicians) { return console.log(magicians); });
}
function great1(magicians) {
    var greatmessage = [];
    for (var i = 0; i < magicians.length; i++) {
        greatmessage.push("The Great " + magicians[i]); // Push the modified magician name into greetmessage array
    }
    return greatmessage;
}
var magiciansName2 = ["Kamran", "Numan", "Luqman", "Salman"];
var greatMagicians = great1(__spreadArray([], magiciansName2, true));
console.log("Orginal magicians");
console.log(magiciansName2);
console.log("Magicians with Great message");
show_magicians2(greatMagicians);

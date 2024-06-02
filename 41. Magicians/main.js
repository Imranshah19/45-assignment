/*
Task No:41
Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/
function show_magicians(magicians) {
    magicians.forEach(function (magicians) { return console.log(magicians); });
}
var magiciansName = ["Kamran", "Numan", "Luqman", "Salman"];
show_magicians(magiciansName);

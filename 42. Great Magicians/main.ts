/*
Task No:42 
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/

function show_magicians1(magicians: string[]): void {
    magicians.forEach(magicians => console.log(magicians));
}
// i = index string
function great(magicians: string[]): void {
    for(let i=0; i<magicians.length; i++){
         magicians[i]= "The great "  + magicians[i];
    }
}
let magiciansName1: string[] = ["Kamran", "Numan", "Luqman", "Salman"];
great(magiciansName1)
show_magicians1(magiciansName1);
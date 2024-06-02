 // More Guests: You just found a bigger dinner table, so now more space is available. Think of
// three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program
// informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the
// end of your list. • Print a new set of invitation messages, one for each person in your list.
 
 
 let guestArr : string[] = ["Ibrahim","Subhan","Hayat"];

 let canNotAttend : string = "Hayat"

 let nweGuest : string = "Naeem"

 guestArr[guestArr.indexOf(canNotAttend)] = nweGuest;
 console.log(guestArr)

// guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`));

//part2 began
let guestBeg : string = "Azlan"
guestArr.unshift(guestBeg);
console.log(guestArr)

//part3 middle
let middleGuest : string = "Usman"
let middleindex = guestArr.length/2
guestArr.splice(middleindex,0,middleGuest);
console.log(guestArr)

//part4 append

guestArr.push("Rizwan")
console.log(guestArr)

//part5 
guestArr.map((items) =>
console.log(` Dear ${items}, you are invited in the more people list on dinner`));
// Shrinking Guest List: You just found out that your new dinner table
// won’t arrive in time for the dinner, and you have space for only two
// guests.
// • Start with your program from Exercise 16. Add a new line that prints
// a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain 
//
//in your list. Each time you pop a name from your list, print a message
// to 
//that person letting them know you’re sorry you can’t invite them to
// dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program


// // //inital list of guests
// //let guests: string[] = ["Kamran","Noman","Luqman","Salman"];

// // //informing that only two people can be invited
// // console.log("Due to limited space, only two people can be invited for dinner.");

// // //Removing guests until two names remain
//  //while (guests.length > 2){
//   // const removedGuest = guests.pop();
//    // Remove the last guest from the list
//    // console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);}


// // //Printing invitation to the remaning two guests
let guests: string[] = ["Luqman","Salman"];
//  guests.forEach((guest) =>{
//     console.log(`Dear ${guest}, you are still invited to dinner.`)
//  });

// // //Removing the last two names from the list
guests.pop();
guests.pop();

// // //Printing the final list to confire it's empty
 console.log("Final guest list:", guests);
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
// let guests: string[] = ["Luqman","Salman"];
//  guests.forEach((guest) =>{
//     console.log(`Dear ${guest}, you are still invited to dinner.`)
//  });
// // //Removing the last two names from the list
guests.pop();
guests.pop();
// // //Printing the final list to confire it's empty
console.log("Final guest list:", guests);

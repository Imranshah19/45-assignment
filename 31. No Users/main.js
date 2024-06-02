//Task 31
// No  users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// if the list is empty, print the message we need to find some useres!
// Removes all of the usernames from your array, and make sure the correct message is printed.
var users = ["admin", "eric", "azlan", "usman", "arhan"];
// if (users.length === 0) {
//     console.log("We need to find some users!")
// } else {
//     for ( let user of users) {
//         if (user === "admin") {
//     console.log(`Hello admin,  would you like to see a status report?`)
//         } else {
//             console.log(`Hello $(users), thank you for logging in again`)
//         }
// }
// }
users = [];
if (users.length === 0) {
    console.log("we need to find some users");
}

var guestArr = ["Ibrahim", "Subhan", "Hayat"];
var canNotAttend = "Hayat";
var nweGuest = "Naeem";
guestArr[guestArr.indexOf(canNotAttend)] = nweGuest;
console.log(guestArr);
// guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`));
//part2 began
var guestBeg = "Azlan";
guestArr.unshift(guestBeg);
console.log(guestArr);
//part3 middle
var middleGuest = "Usman";
var middleindex = guestArr.length / 2;
guestArr.splice(middleindex, 0, middleGuest);
console.log(guestArr);
//part4 append
guestArr.push("Rizwan");
console.log(guestArr);
//part5 
guestArr.map(function (items) {
    return console.log(" Dear ".concat(items, ", you are invited in the more people list on dinner"));
});

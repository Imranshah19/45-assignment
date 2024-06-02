var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["KSA", "Pakistan", "UK", "Canada", "Turkey"];
// Print the array in its original order
console.log("original order:", placesToVisit);
// print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// show that the array is still in its original order
console.log("original order after sorting:", placesToVisit);
// print the array in reverse alphabetical order without changing the original of the list
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// show that the array is still in its original order
console.log("original order after reverse sorting:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
// sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
// sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);

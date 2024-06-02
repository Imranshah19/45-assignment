// Task no 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
// ststements that check for certain fruits in your array.

// Make a array of your three favorite fruits and call it favorite_fruits.

// write five if statements. Each should check whether a certain kind of fruit is in your array. 
// if the fruit is in your array, the if block should print a statement, such as You realy like bananas'

let favorite_fruits : string [] = [`kivi`,`orange`,`apple`,`mango`]

if (favorite_fruits.includes("kivi")) {
   console.log("kivi") 
}
if (favorite_fruits.includes("mango")) {
    console.log("mango") 
}

if (favorite_fruits.includes("orange")) {
    console.log("orange")
 }
if (favorite_fruits.includes("peach")) {
    console.log("you realy like bananas")
}
if (favorite_fruits.includes("arange")) {
    console.log("orange")
}
if (favorite_fruits.includes("berry")) {
    console.log("you are realy like bananas")
}
if (favorite_fruits.includes("apple")) {
    console.log("apple")
}

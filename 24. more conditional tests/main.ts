// task 24
// more conditional tests: you don't have to limit the number of tests you create to 10.
// if you want to try more comparisons, write more tests. have at least one True one False result for each of the following

// Test for equatity and inequatity with strings

// Test using the lower case function

// Numerical tests involving equatity and inequatity. greater than and less than, greater than or 
// equal to, and less or eqral to 

// Tests using "and" and "or" operators

// Test whether an item is in a array

// test wether an item is not in array

let name_1 : string = "Azlan"
let name_2 : string = "Azlan Shah"
let name_3 : string = "Syed Azlan Shah"

//if (name_1 == name_3){
  //  console.log("names are equal")
//} else {
  //  console .log("names are not equal")
//}
//if (name_1 != name_2){
//} else {
  //  console.log("names are equal")
//}

//if (name_1 == name_3){
//} else {
  // console.log("names are equal")
//}

 let age_1 : number = 18
 let age_2 : number = 22

//if (age_1 == 18) {
  //console.log("eligible for vote")  
//}

//if (age_1 != 22){
   // console.log("eligible for vote in elder category")
//}

//less than

//if (age_1 <= age_2) {
  //  console.log("younger")
//}

//greater than

//if (age_2 >= age_1) {
  //  console.log("elder")
//}

//if (age_1 == 18 && age_2 == 22 ) {
    //console.log("person is elegible for vote")
//}

// and && or \\

//if (age_1 == 18 || age_2 != 22 ) {
  //  console.log("person is not elegible for vote")
//}

// item is in a array

let country : string [] = ["pakistan", "KSA","UAE","UK"]
//if (country.includes("pakistan")){
  //  console.log("pakistan is in country list")
//}

// item is not in array

if (!country.includes("iran")){
    console.log("iran is not include in an array")
}
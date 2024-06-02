// task 28
// stages of life. write an if-else chain that determines a person's stage of life. set a value for the 
// variable age, and then:
// if the person is less than 2 years old, print a message that the person is a baby.
// if the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// if the person is at least is at 4 years old but less than 13, print a message that person is a kid.
// if the person is at least 13 years old but less than 20,  print a message that the person is teenager.
// if the person is at least 20 years old but less than 65, print a message that the person in an adult.
var age = 54;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are older");
}

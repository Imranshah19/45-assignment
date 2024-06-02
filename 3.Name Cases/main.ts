// Name Cases: Store a person’s name in a variable, and then print that
// person’s name in lowercase, uppercase, and titlecase.

//let personName: string = "Kamran"
//console.log("lowercase:", personName.toLowerCase());

//uppercase

//console.log("uppercase:", personName.toUpperCase());

//titlecase
let personName: string = "kamran"

console.log("titlecase:", personName.replace(/\b\w/g, c=> c.toUpperCase()));
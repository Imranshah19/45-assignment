// task:37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirt(size: string= "Large", text: string= "I love Typescript"): void{
    console.log(`you have order ${size} shirt that says ${text}`)
}

// Call the funciton
make_shirt();// By default
make_shirt("Meduim");// By default message has been takes
make_shirt ("Small", "i need a big shirt with white color to wear");// both arguments are given custome
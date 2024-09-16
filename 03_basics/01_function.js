// console.log("s");
// console.log("h");
// console.log("u");
// console.log("b");
// console.log("h");
// console.log("a");
// console.log("m");

function sayMyName() {
  console.log("s");
  console.log("h");
  console.log("u");
  console.log("b");
  console.log("h");
  console.log("a");
  console.log("m");
}
// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }
function addTwoNumbers(number1, number2){
    // let Result = number1 + number2
    // return Result

    return number1 + number2
    
}

const result = addTwoNumbers(3,5);
// console.log("Result: ", result);

// addTwoNumbers(3, null)


function loginUserMessage(username){
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
 
        return `${username} just logged in`
}
loginUserMessage("Shubham")
console.log(loginUserMessage());

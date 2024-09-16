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
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){ //rest operator
    return num1
}
// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200, 400, 600, 800, 3000));

const user ={
    username: "Shubham",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user);
// handleObject({
//     username: "Sujal",
//     price: 99
// })



const myNewArray = [1, 2, 3, 4, 5]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 700]));




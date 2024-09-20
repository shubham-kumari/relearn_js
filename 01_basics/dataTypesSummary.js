// primitive data-type (call by value - changes in copy)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scorevalue = 100.3;
const isloggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);

const bigNumber = 87378979773467138131883n;


// Non -primitive datatype (call by refrence)
// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "shubham",
    age: 18,
}

const myFunc = function(){
    console.log("hello world");
    
}

console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// memory
// Stack(primitive -> call by value -> changes in copy) , heap memory (non - primitive -> call by refrence -> changes in original value)

let myChannelName = "Shubham"
let anotherName = myChannelName;
anotherName = "shubham.kumari"
console.log(myChannelName);
console.log(anotherName); // changes in copy


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "shubham@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);  // change in original value



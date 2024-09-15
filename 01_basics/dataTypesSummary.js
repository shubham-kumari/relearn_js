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

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
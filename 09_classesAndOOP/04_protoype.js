let myName = "shubham     "
console.log(`normal length: ${myName.length}`);

console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shubham = function(){
    console.log("shubham is present in all objects");
}
Array.prototype.heyShubham = function(){
    console.log(`Shubham says hello`);
}

// heroPower.shubham();
myHeros.shubham();
myHeros.heyShubham();
// heroPower.heyShubham();



// inheritance

const user = {
    username: "shubham",
    email: "example@gmail.com"
}
const teacher = {
    makeVdo: true,
}
const teachingSupport = {
    isAvailable: false,
}
const TASupport = {
    assignment: "JS",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "kumari        "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.trueLength();
myName.trueLength();
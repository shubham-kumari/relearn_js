// sigleton - through constructor ex: object.create

// object literals

const mySym = Symbol("key1")

const js_user = {
    name: "Shubahm",
    "full Name" : "Shubham kumari",
    [mySym]: "myKey1", // to use as a symbol
    age: 18,
    location: "patna",
    email: "shubham@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(js_user.name);
// console.log(js_user["email"]);
// console.log(js_user["full Name"]);
// console.log(js_user[mySym]);

js_user.email = "shubhamchatgpt.com"
// Object.freeze(js_user);

js_user.email = "shubhammicrosoft.com"
// console.log(js_user);

js_user.greeting = function(){
    console.log("hello js user");
    
}

js_user.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
    
}

console.log(js_user.greeting());
console.log(js_user.greetingTwo());








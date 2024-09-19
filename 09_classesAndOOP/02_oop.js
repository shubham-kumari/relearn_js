// object literal
const user = {
    username: "shubham",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("got user details fron database");
        // console.log(this);
        // console.log(`username: ${this.username}`);   // this have current context
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());




// constructor function

// const promiseOne = new Promise();  // new is constructor function
 // new keyword allow krta h ki ek hi object literal se multiple instance with new context also bna sko

 function User(username, loginCount, isLoggedIn){
    this.username  = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetig = function(){
        console.log(`welcome ${this.username}`);
    }
    return this  //
 }

 const userOne = new User("shubham", 12, true)  // new nya object create krta h
 // construction function call hota h new keyword k karan
 // argument pack krta h this me aur usko return kr deta h

 const userTwo = new User("kumari", 11, false)
 console.log(userOne.constructor);
//  console.log(userTwo);

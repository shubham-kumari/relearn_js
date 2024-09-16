const user = {
    username: "Shubham",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //this current context ko refer krta h
        // console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "sujal"
// user.welcomeMessage();
 console.log(this);

function one(){
    // console.log(this);
    let username = "shubham"
    // console.log(this.username);
    
    
}
// one();


// const two = function(){
//     let username = "shubham"
//     console.log(this.username);
// }
// two();
 
const two = () => {
    let username = "shubham"
    console.log(this);
}
two();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "hitesh"})



console.log(addTwo(3,4));


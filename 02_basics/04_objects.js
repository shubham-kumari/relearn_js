const tinderUser = new Object();
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "sujal"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "sujal@gmail.com",
    fullname:{
        userFullname:{
            firstName: "Shubham",
            lastName: "Kumari"
        }
    }
}

// console.log(regularUser.fullname);


const obj1 = {1: "a", 2: "b", 3:"c"}
const obj2 = {4: "d", 5:"e"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);



const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "u@gmail.com"
    },
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));





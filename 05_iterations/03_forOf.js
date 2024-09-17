// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2,3, 4, 5]
for (const i of arr) {
    console.log(i);
    
}

const greetings = "hello world!"
for (const greet of greetings) {
    console.log(greet);
    
}

// maps
const map = new Map();
map.set('In', "India")
map.set('USA', "United State of America")
map.set('FR', 'France')
map.set('In', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}




// const myObj = {         // obj cant be iterate in forof loop
//     game1 : "NFS",
//     game2 : "spiderman"
// }
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
    
// }
const myObj = {
    js: "java-script",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
   console.log(`${key} for ${myObj[key]}`);
   
}

const programming = ['js', "rb", "py", "cpp", "java"]
for (const key in programming) {
    console.log(programming[key]);
       
}


// const map = new Map();    // map cant be iterate in forin loof
// map.set('In', "India")
// map.set('USA', "United State of America")
// map.set('FR', 'France')
// map.set('In', "India")
// for (const key in map) {
//     console.log(key);
    
// }
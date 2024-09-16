// var c = 300

let a = 300

if (true) {
  let a = 10;
  const b = 20;
  // var c = 30;
  console.log("inner: ", a);
  
}

console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Shubham"
    function two(){
        const website = "Twitter"
        console.log(username);
        
    }
    // console.log(website);
    two();
    
}
one();


// ++++++++++++++++ interesting +++++++++++++++++++++
function addOne(num){
    return num + 1
}
addOne(5);

const addTwo = function(num){
    return num+2
}
addTwo(5);
const programming = ['js', "rb", "py", "cpp", "java"]
// programming.forEach( function (item) {
//     console.log(item);
    
// } )
programming.forEach( (item) => {
    // console.log(item);
    
} )
programming.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    
} )

// function printMe(item){
//     console.log(item)
// }
// programming.forEach(printMe)



const myCoding = [
    {
        languageName: "java-script",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
})
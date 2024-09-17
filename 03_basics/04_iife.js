// Immediately Invoked Function expressions
(function one() //named iife
{
    console.log("DB Connected");
    
})(); // global scope k polution se proble hoti h , to global scope k variables(declaration) ko hatane k liye iife ka use krte h
// yha code end krne k liye semi-colon important h kyki isko ni pta h function end kha krna h
// one();
((name) => {
    console.log(`DB Connected Two ${name}`);
    
})("Shubham")
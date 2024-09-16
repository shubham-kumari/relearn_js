const name = "shubham"
const repoCount = 20
// console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`); //string interpolation
const gameName = new String("shubham-su-com")
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('b'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newtringOne = "     shubham    "
console.log(newtringOne);
console.log(newtringOne.trim());

const url = "https://shubham.com/shubham%20kumari"

console.log(url.replace('%20', '-'));
console.log(url.includes('shubham'));
console.log(gameName.split('-'));












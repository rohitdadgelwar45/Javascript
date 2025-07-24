// console.log(name);
let name="Rohit";
console.log(name);


console.log(age);// print undefined
// here age initialized and declare at bottom still it gives value as undefined
// this concept known as hoisting where initiallization seen moves towards top
//but this only done with var
// let and const gives refference error, because it will gone into temporal dead zone 
var age=22;
console.log(age);
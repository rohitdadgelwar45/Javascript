// primitive data types 
// 7 Types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score=100;
console.log(score);

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// example of BigInt 
const bigNumber=33839493990383948938n
console.log(typeof(bigNumber))
console.log(id==anotherId)

// Reference (Non Premetive)

// Array, Objects, Function

// Examples
// array 
const heroes=["shaktiman", "krish", "junierG", "G-One", "Flying-Jaat"]
console.log(heroes)
console.log(heroes[2])

// object 
const myObj={
    name:"Rohit",
    age:22,
    gender: "Male"
}
console.log(myObj)

// function()
var myFuction=HelloFunction();
function HelloFunction(){
    console.log("hello in Coding World!");
}

// console.log(myFuction)
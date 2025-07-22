//diff bet primitive / value types and non-primitive/ reference types
let a="rohit";
let b=a;

a="dadu"
// here it will change value of a, cause copy by value
console.log(a);
console.log(b);

let p={name:"Rohit"};
let q=p;

p.name="Dadu";
// here it will not change value of a, cause copy by reference

console.log(p);
console.log(q);


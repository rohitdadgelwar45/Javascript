console.log(".........basic comparison......")
console.log(2>1)
console.log(2>=1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)

console.log(".....Checking different types of datatypes")
console.log("2" > 1);
console.log("02" > 1);

console.log(".....Checking null datatypes")
// its convert sometimes NaN, true or false, thats why its makes confusion
console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(".....Checking undefined datatypes")
console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)

console.log(".....Checking with === datatypes")
// its check value only 
console.log("2"==2)
// its checks strictly. its checks value and their data types as well 
console.log("2"===2)
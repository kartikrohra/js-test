let num = 100
console.log(num);
const anothernum =new  Number(200)
console.log(anothernum);
console.log(typeof anothernum.toString())
console.log(typeof anothernum);
console.log(anothernum.toFixed(2));
let balance = 124.5678
console.log(balance.toPrecision(3));
let amt = 800000
console.log(amt.toLocaleString('en-In'));
/////////////////////////////////maths//////////////////////////////////////
console.log(Math.abs(-4)); 
console.log(Math.round(3.4));
console.log(Math.ceil(4.2));// 5, coz it selects top vLUE
console.log(Math.floor(4.2));// 4, it selects small value 
console.log(Math.max(3,4,2,5,6,1));
console.log(Math.min(3,4,5,2,6,1));
//for random values
console.log(Math.random()*10 + 1);
// suppose now i want value btw 1 to 6 as for dice
const min = 1
const max =  6
console.log(Math.round((Math.random()*(max - min +1))+min));













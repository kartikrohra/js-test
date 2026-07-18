// arrays
const arr = [1,2,3,4,5]
const myheroes = ["shaktiman","naagraj"];
// another way of declaring it
const arr2  = new Array(6,7,8,9,10)
console.log(arr2[1]);
// push command 
arr2.push(12);
console.log(arr2);
// in pop it just pops last value LIFO....
arr2.pop();
console.log(arr2);
// .unshift()= for inserting value at the start
arr2.unshift(14);
console.log(arr2);
// includes is use to check if no. exists or not 
// joins is used to combine all values into one as String
const newarr = arr2.join()
console.log(newarr);
// slice 
var myarr = arr2.slice(1,3);
console.log(myarr);
console.log("A" ,arr2);

var myarr2 = arr2.splice(1,3)
console.log(myarr2);

console.log("B", arr2);
/* the major diff between slice and spices are
1) for example condition is (1,3) so slice will take 0,1,2
but splice will include 0,1,2,3 
2) slice doesnt makes change in orriginal array , but 
splice removes the asked part from the original array*/











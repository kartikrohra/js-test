// stack(primitive) //heap(non primitive)
// exmple of stack 
let myname= 'kartik'
anothername = myname
console.log(anothername);
// so when u print it shows 'kartik'
// here anothername stores a copy of value in myname, so if i change the value of anothername 
// , it wont affect myname this is stackkkkkk

// in heap 
let detail =
{
    name:"kartikk",
    age: 18,
};
let updetail = detail
console.log(updetail.age);
//here detail and updetail has same original value so if i change updetail, it will change details too
//this is heappp

const name = 'kartik'
 let myage= 19
 console.log(`hello, my name is ${name} and my age is ${myage}`);
 let GameName = 'pubg'
 console.log(GameName[2]);
 console.log(GameName.length);
console.log(GameName.toUpperCase());
//these r prototypes ,like kinda features for string
//like this we have several type of prototypes
console.log(GameName.charAt(3));
console.log(GameName.indexOf('u'))
//substring 
let newString = GameName.substring(0,2);

console.log(newString);
//slice can also be used for substring as it accepts negative value but substring dont
let anotherstring = '   kartik    '
console.log(anotherstring.trim());
//trim removes the free spaces 
let teststring = 'kartikrohra2310'
console.log(teststring.replace("2310","2006"));
// replace helps in replacing particular part
console.log(teststring.includes('kartik'));
//checks if its present inside the string or not
let mypass = 'kartik-rajesh-rohra'

console.log(mypass.split("-"));


 
 

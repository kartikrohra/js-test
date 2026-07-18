const favsong = ["mmj","sarkaree", "CROWN" ,"joishqhua"]
const favartists = ["king", "karan", "seedhemaut"]
// if i try to merge both array using concat or push, it doesnt adds elemts togrther 
// it treats complete array as one elemnt as arrY accepts any type
const favcombo = favsong.concat(favartists)
console.log(favcombo);
// we can check if its array or not
console.log(Array.isArray(favsong));
// make araay from anything
console.log(Array.from("kartik"));
 
let score1 = 123
let score2 = 125
let score3 = 150
console.log(Array.of(score1,score2,score3));








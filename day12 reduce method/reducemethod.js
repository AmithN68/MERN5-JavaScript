// "use strict"


// reduce method
let a = [1, 2, 3, 4, 5];
let r = a.reduce((acc, l) => {
    return acc + l;
}, 6);
console.log(r);


// using map,filter and reduce
let arr = [100, 200, 300, 470, 700, 870, 'hii', '888'];
var str = arr.map(m => m + 50);
var str2 = arr.map(m => m + "50");
var str3 = arr.map(m => m * "50");
console.log(str);
console.log(str2);
console.log(str3);

var str1 = str.filter((val) => val > 300);
console.log(str1);

console.log(str1.reduce((st, l) => st + l));


var b = 10;
function x(){
    b = 100;
    console.log(b);
}
x();
console.log(b);
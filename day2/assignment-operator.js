// assignment
m = 10;
console.log((m += 5));
console.log((m -= 5));
console.log((m *= 2));
console.log((m /= 4));
console.log((m = m % 2));
console.log((m = m + 2));
console.log((m **= 3));

// string
let str1 = "hello";
str1 += "hai";
console.log(str1);
str1 -= "5";
console.log(str1);

let a = 10;
a -= "5";
console.log(a);
a *= 3;
console.log(a);

// comparision
// equal to
let aa = 100;
let b = "50";
c = 100;
console.log(aa == b);
console.log(aa == c);

// strictly equal
console.log(aa === b);
console.log(aa === c);

// not equal
console.log(aa != c);
console.log(aa != b);

// strictly not equal
console.log(aa !== c);
console.log(aa !== b);

// less than
console.log(aa < b);
console.log(aa < c);

// greater than
console.log(aa > b);
console.log(aa > c);

// less than equal
console.log(aa >= b);
console.log(aa >= c);
console.log(b >= aa);

// greater than equal
console.log(aa <= b);
console.log(aa <= c);
console.log(b <= aa);
15;

let age = prompt("enter your age");
age > 18 ? console.log("you are adult") : console.log("you are kid");

// if (10 > 5) {22
//   alert("yes");
// } else {
//   alert("no");
// }

// 10 > 5 ? alert("yes") : alert("no");

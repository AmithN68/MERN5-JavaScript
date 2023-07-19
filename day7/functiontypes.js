// "use strict"

// let x = function z() {
//     console.log("hello");
// }
// x();

// let = function () {
//     console.log("hii");
// }
//     ();


// arrow function
// function p() {
//     return "hello";
//     console.log("hii")
// }
// console.log(p());


// q = () => {
//     console.log("hello");
//     return "good";
// }
// console.log(q());
// q();


// let r = () => {
//     console.log("hell");
//     console.log("llo");
//     console.log("hii");
// }
// r();

// let s = () => {
//     console.log("good");
//     return "morning";
//     console.log("guysss")
// }
// console.log(s());
// console.log(s);



// examples

let add = (a,b) => {
    return a+b
}
console.log(add(3, 3));//with arrow function

let add1 = (a, b) => {
  a + b;
};
console.log(add1(3, 3));//without return

let add2 = (a, b) => 
  a + b;
console.log(add(3, 3));//without return and curly braces

let add3 = (a, b) =>
    console.log(a + b);
add3(5, 6);


function diameter(r) {
    console.log(2 * r);
    return 2 * r;
}
console.log(diameter(5));

let b = Number(prompt("enter breadth"));
var rect = () => {
    l = Number(prompt("enter length"));
    return l * b;
}
console.log(rect())







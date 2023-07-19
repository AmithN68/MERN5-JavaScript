// iife
// (function () {
//     var a = 10;
//     console.log(a)
// })();

// var b = 20;
// function x() {
//     console.log(b);
// }
// x()
// x()
// x();
// x();
// x();

// let test = function () {
//     let str = "hi";
//     return str;
// };
// console.log(test());

// (function () {
//     console.log("iife");
// })();


// // higher order   function
// function hof(a, b, cb) {
//     let d = 8;
//     console.log(d)
//     console.log(cb);
//     return cb(a, b);
// }

// let addition = hof(10, 20, function (a, b) {
//     console.log(a - b);
//     return a + b;
   
// });
// console.log(addition);

// let subs = hof(20, 1, (a, b) => a - b);
// console.log(subs);



let num = Number(prompt("enter the number:"));
let input = prompt("type sqrt to find square,type cbrt to find cuberoot").toUpperCase();

if (input == "SQRT") {
    res = num ** 0.5;
    console.log(res);
}
else {
    res = num ** 0.33;
    console.log(res);
}



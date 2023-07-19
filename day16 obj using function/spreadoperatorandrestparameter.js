//! 1) we can use rest parameter after
function test(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(...c);
}
test(10, 20, 30, 40,50);

//! 2) we cannot use rest parameter before and while calling we should not mention dot(...)
// function test1(...a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// test1(10, 20, 30, 40);


let demo = [10, 20, 30, 40];
let [...x] = demo
console.log(x);
let { ...y } = demo;
console.log(y);

// array destructing
let arr = [10, 20, 25, 33];
let [a, b, ...c] = arr;
console.log(a)
console.log(b)
console.log(c)

// UD
let { l, m, ...n } = arr;
console.log(l);
console.log(m);
console.log(n);

// let{...p}

let arr1 = [10, 20, 30, 40, 50];
let arr2 = [100, 200, 300, 400, 500];
console.log(arr1.concat(arr2));
console.log(arr1 + arr2);
console.log(...arr1, ...arr2);


let num = "123";
let [...j] = num;
console.log(j);
console.log(j.reduce((acc, lv) => acc + lv));
console.log(parseInt(x.reduce((acc, lv) => acc + lv)));
console.log(j.map(m => parseInt(m)).reduce((acc, lv) => { return acc + lv; }));

// by using split()
let s = num.split("");
console.log(s.map(m => parseInt(m)).reduce((acc, lv) => acc + lv));;





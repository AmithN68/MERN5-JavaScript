console.log(Math.sqrt(4));
console.log(Math.cbrt(27));
console.log(Math.floor(10.9));
console.log(Math.floor(10.1));
console.log(Math.ceil(10.1));
console.log(Math.ceil(10.9));
console.log(Math.ceil(10.01));
console.log(Math.round(10.4));
console.log(Math.round(10.5));
console.log(Math.pow(2, 3));



// read 2 numbers from the prompt first number as base value and 2nd number as exponent value
// find the power,sqrt,cbrt,floor,ceil,

let n1 = Number(prompt("enter the first number:"));
console.log(Math.cbrt(n1));
console.log(Math.sqrt(n1));


// ______or______
console.log(`the cube root of ${n1} is ${Math.cbrt(n1)}`);
// let n2 = Number(prompt("enter the second number:"));
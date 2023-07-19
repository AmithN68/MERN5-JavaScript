// logical AND(&&)
let e = 100;
let f = 50;
g = 25;
console.log(e > f && e < f);

// logical OR(||)
console.log(e > f || e < f);

// logical NOT(!)
console.log(!(e > f));

console.log(e > f || e > g || e < f);
console.log(e > f && e > g && e < f);
console.log((e > f && e > g) || e < f);
console.log(e > f || (e > g && e < f));
console.log(e > f || e > g && e < f);
console.log(e > f && e > g || e < f);
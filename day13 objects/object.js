// "use strict";

// object
let empDetails = {
  ename: "amith",
  id: "01",
  company: "accenture",
  city: "Hassan",
  Address: {
    taluk: "arsikere",
    area: "rnk",
  },
};
console.log(empDetails);
console.log(empDetails.city);
console.log((empDetails.pin = 573112));
console.log(empDetails);

console.log((empDetails.id = "02"));
console.log(empDetails);
console.log(empDetails.Address.area);
console.log((empDetails.Address.post = "ns"));
console.log(empDetails.Address);
console.log((empDetails.Address.area = "RNK"));
console.log(empDetails.Address);

console.log("___________function__________");
// functon
var a = 10;
let b = 20;
const c = 30;
function x() {
  var a = 100;
  console.log(a);
  console.log(this.a);
  b = 200;
  console.log(b);
  console.log(this.b);
  console.log(this.c);
}
x();

console.log("______inner function______");
m = 1;
function x() {
  var m = 2;
  console.log(m);
  console.log(this.m);
  function y() {
    console.log(m);
    console.log(this.m);
  }
  y();
}
x();

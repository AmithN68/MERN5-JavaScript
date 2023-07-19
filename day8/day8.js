// console.log("start")
// function x(p, q) {
//     var a = 10;
//     function y() {
//         console.log(a);
//         console.log(p);
//         console.log(q);
//     }
//     return y;
// }
// x(5, 6)();
// console.log("end");



console.log("start");
var str = "test";
function x(j, k) {
    var str = "demo";
    var a = 10;
    console.log(a);
    var p = "hi";
    console.log(p);
    // console.log(k);
    console.log("i m x()");
  function y() {
    console.log(a);
    console.log(str);
    console.log(this.str);
      console.log(j);
      console.log("i m y()");
      var b = 20;
      console.log(b);
      function z() {
          console.log(b);
        //   console.log(a);
        //   console.log(k);
      }
      z();
    }
    y();
}
x(55, 88);

console.log("end");
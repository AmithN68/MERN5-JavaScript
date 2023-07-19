let obj1 = {
    ename: "amith",
    id: "01",
    demo: () => {
        console.log(this)
        console.log(this.id)
    }
};
console.log(obj1);
console.log(obj1.demo());


// using ananymous function
let obj2 = {
  ename: "amith",
  id: "01",
  test: function() {
    console.log(this);
    console.log(this.ename);
  }
};
console.log(obj2.test());
console.log(obj2);
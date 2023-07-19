let obj = {
  sName: "chandu",
  id: 111
}
console.log(obj);

Object.freeze(obj);
console.log(Object.isFrozen(obj));
obj.company = "pysp";
console.log(obj);
obj.id = 555;
console.log(obj);

let obj = {
    sName: "chandu",
    id: 111,
};
console.log(obj);

Object.seal(obj);
console.log(Object.isSealed(obj));
obj.company = "pysp";
console.log(obj);
obj.id = 555;
console.log(obj);

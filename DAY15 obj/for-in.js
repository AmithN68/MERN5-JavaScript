// let fruit = ["apple", "orange", "mango"];
// console.log(fruit);

// // for in
// for (let values in fruit) {
//     console.log();
// }


// // for each
// fruit.forEach((val, ind) => {
//     console.log(val);
//     console.log(ind);
// });

// fruit.forEach((index, values) => {
//     console.log(val);
//     console.log(ind);
// });
// //parameter position is always for the values of the array.

// fruit.forEach((p1, p2) => {
//     console.log(p1);
// });



// // let map = fruit.map(items => {
// //     return items;
// // });
// // console.log(map);

// let forEachEx = fruit.forEach(val => {
//     console.log(val);
//     return val;
// });
// console.log(forEachEx);


// we can apply forin and foreach to the objects and forOf we can't apply to the object
let studentDetails = {
    sName: "amith",
    id: 44,
    job: "Developer"
};
console.log(studentDetails);

// Note:Only for-in loop can be applied to the object
for (let x in studentDetails) {
    console.log(x);
}

// console.log(Object.keys(studentDetails));

// studentDetails.forEach((p1, p2) => {
//     console.log(p1);
// });

let arrayOfObjects = [
  {
    eName: "amith",
    id: 22,
    job: "mern",
  },
  {
    eName: "chandu",
    id: 23,
    job: "python",
  },
  {
    eName: "arjun",
    id: 24,
    job: "development",
  },
  {
    eName: "mark",
    id: 225,
    job: "react",
  },
];

let salary = arrayOfObjects.map(val => {
    console.log(val);
    val.salary = 20000;
    return val;
});
console.log(salary);

let p = arrayOfObjects.forEach((p1, p2) => {
    return p1.id;
});
console.log(arrayOfObjects);
console.log(p);//UD

let q = arrayOfObjects.map(p1 => {
    console.log(p1);
    console.log(p1.eName);
    return p1.job;
});
console.log(arrayOfObjects);
console.log(p);



// let arr = [1, "hii", () => {}, {}, true, null, undefined];
// console.log(arr);

// let arr1 = Array(1, 2, 3, 4, 5); //without new keyword
// let arr2 = new Array(1, 2, 3); //with new keyword
// console.log(arr1);
// console.log(arr2);

// console.log(arr1.length);


// // slice in array
// let a = [10, 15, 20, 25, 30];
// console.log(a[3]);
// console.log(a[-2]);
// console.log(a[0]);
// console.log(a[1])


// // pop()
// // pop means removing by default remove last element
// console.log("_________pop___________")
// console.log(a.pop());
// // console.log(a.pop(-3));
// console.log(a)
// console.log(a.pop());
// console.log(a.pop());
// console.log(a.pop());
// console.log(a.pop());
// console.log(a.length)
// console.log(a) //empty by using pop


// // push()
// // push is used to add element to the array
// console.log("__________push__________")
// console.log(a.length)
// a.push(100);
// a.push(200);
// a.push(300);
// a.push(400);
// console.log(a);


// // shift
// // shift is used to remove element from starting or begining
// console.log("______shift______");
// var b = [11, 22, 33, 44];
// console.log(b);
// b.shift();
// console.log(b);
// b.shift();
// console.log(b);


// // unshift
// // unshft is used to add element at start
// console.log("______unshift______");
// console.log(b);
// b.unshift(25);
// console.log(b);
// b.unshift(21);
// b.unshift("");
// console.log(b);



// // splice()
// console.log("______splice______")
// let test = [10, 20, 30, 40];
// console.log(test);
// test.splice(1, 2, "hello","hii");
// console.log(test);

// // add by removing element
// test[1] = "good";
// console.log(test);

// // if we give more than index value
// test[10] = "stack";
// console.log(test)

// // adding without removing element
// test.splice(2, 0, 100, "mern", 22);
// console.log(test);

// // to remove element at particular index
// console.log("____remove___");
// test.splice(2, 1);
// console.log(test);

// test.splice(5, 5);
// console.log(test);

// // it consider last index
// test[0, 1, 2, 4] = "developer";
// console.log(test);


// // slice
// console.log("_____slice_____");
// let slc = new Array(1, 2, 3, 4, 5, 6);
// console.log(slc);
// console.log(slc.slice(-2, 5));
// console.log(slc);
// console.log(slc.slice(2, -1));
// console.log(slc);
// console.log(slc.slice(-6, -2));


// // index0f()
// let arra = [22, 23, 24];
// console.log(arra.indexOf(23));
// console.log(arra.indexOf(25));


// // include():return boolean values
// console.log(arra.includes(23));
// console.log(arra.includes(222));


// // concat()
// let n1 = [1, 2, 3];
// let n2 = [4, 5, 6];
// console.log(n1.concat(n2));


// // flat()
// let ar = [1, 2, 3, [4, 5]];
// console.log(ar.flat());

// let ma = [11, 22, [21, 22, [43, 44], 5], 33];
// console.log(ma.flat(2));


// sort()
let aa = [3, 9, 0, 4, 6, 2, 8, 7, 1,5,77,89,55,33,6,789,546,999];
console.log(aa.sort());

let str2 = ["a", "r", "aa","ff", "dd"];
console.log(str2.sort());

let str3 = [12,45,2,34,678,987,5,7,'a','as','d','ed','att','wkwdadh','njkhjkd','we','A','C','G','X','W','EF','HI','YU','!','#','@','*','$','^'];
console.log(str3.sort());

// ASCENDING
var str4 = [6, 3, 9, 2, 67, 33];
console.log(str4.sort());
console.log(str4.sort((a, b) => { return a - b }));







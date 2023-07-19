let m = [10, 20, 30, 40];
console.log(m.map(mi => mi + 5));
           
let n = m.map(mi => mi + 5);
console.log(n);


function hof(arr, cb) {
    console.log(arr);
    console.log(cb)
    let mappedItem = [];
    for (let i = 0; i<arr.length; i++){
        mappedItem.push(cb(arr[i]));
    }
    return mappedItem;
}

console.log(hof([10, 20, 30, 40, "hi"], (item) => { return item + 100 }));


let str = "developer";
var str1 = str.split("");
console.log(str1);
console.log(str1.map(val => val + '#'));

function splits(st,fn) {
    let res = [];
    for (let i = 0; i < st.length; i++){
        res.push(fn(st[i]));
    }
    return res;
}
console.log(splits(str1, (val) => { return '#' + val }));



// constructor function
class demo {
    constructor(sname, id, city) {
        this.sname = sname;
        this.id = id;
        this.city = city;
    }
}

let s1 = new demo("amith", 1, "hassan");
let s2 = new demo("chandu", 2, "bangaore");
let s3 = new demo("arjun", 3, "tumkur");

console.log(s1);
console.log(s2);
s3.phno = 8951946105;
console.log(s3);
console.log(new demo("vivek", 4, "kalasipalya"));


let arr = [s1, s2, s3];
console.log(arr);

let x = arr.forEach(res=>{
    console.log(res.sname)
})
console.log(x);


let y = arr.map(res => {
    console.log(res.sname);
    return res.sname;
});
console.log(y)




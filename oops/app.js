// !inheritance
class parent{
    constructor(name,age,city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
};
let s1 = new parent("Amith", 24, "Bangalore");
console.log(s1);

class child extends parent{
    constructor(name, age, city, email, company) {
        super(name, age, city);
        this.email = email;
        this.company = company;
    }
};
let s2 = new child("Amith", 24, "hassan", "amith@gmail.com", "Accenture");
console.log(s2);

class GrandChild extends child {
  constructor(name, age, city, email, company,salary,phno) {
    super(name, age, city, email, company);
    this.salary = salary;
    this.phno = phno;
    }

    // !getter method
    get value() {
        return this.company;
    }
    // !setter method
    set update(test) {
        // return this.salary = test;
        return this.city = test;
    }
};
let s3 = new GrandChild("Amith", 24, "hassan", "amith@gmail.com", "Accenture", 200000, "7026241215");
console.log(s3);
console.log(s3.value);
// !updating purpose
// s3.update = 250000;
// console.log(s3);
s3.update = "bangalore";
console.log(s3);


// !static methods

class data{
    static a = "hello";
}

class demo extends data{
    static me() {
        // return this.a;
        return `${super.a}`;
    }
}
console.log(demo.me());

class ClassWithStaticMethod {
  static staticProperty = "someValue";
  static staticMethod() {
    return "static method has been called.";
  }
  static {
    console.log("Class static initialization block called");
  }
}

console.log(ClassWithStaticMethod.staticProperty);
console.log(ClassWithStaticMethod.staticMethod());



// class student{
// 			constructor(fname,lname,age){
// 				this.fname=fname;
// 				this.fname=fname;
// 				this.fname=fname;
// 			}
//     fullname = () => {
//         return ${ this.fname } ${ this.age };
//     };
// };


// 	let s10=new student("Amith","N",24);
// 	console.log(s10);
// 	console.log(s10.fullname());

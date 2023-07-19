
// object methods
let empDetails = {
    eName: "chandu",
    Id: "02",
    company: "Accenture",
    Address: function () {
        console.log(this);
        console.log(eName);
    }
};

console.log(Object.keys(empDetails));
console.log(Object.values(empDetails));
console.log(Object.entries(empDetails));
console.log(empDetails);


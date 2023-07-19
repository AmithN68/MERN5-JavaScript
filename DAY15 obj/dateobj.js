let x = new Date();
var arr = [
  "SUN",
  "MON",
  "TUES",
  "WEDNES",
  "THURS",
  "FRI",
  "SATUR",
];

var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"];
console.log(x);
console.log(x.getTime());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds());
console.log(arr[x.getDay()]);
console.log(arr[5])
console.log(x.getFullYear());
console.log(month[x.getMonth()]);
console.log(month[10])
console.log(x.getMilliseconds());
console.log(x.getTimezoneOffset());
console.log(x.getUTCDate());
console.log(x.getDate());
console.log(x.getUTCMonth());
console.log(x.getUTCDay());
console.log(x.getUTCFullYear());
console.log(x.getUTCMilliseconds());
console.log(x.getUTCMinutes());
console.log(x.getUTCHours());


let a = `My name is Amith, attending js class on ${arr[x.getDay()]} at ${x.getHours()} :${x.getMinutes()} AM in the month of ${month[x.getMonth()]} ${x.getFullYear()} year`
console.log(a)






// switch (x.getDay()) {
//   case 0:
//     console.log("SUNDAY");
//     break;
//   case 1:
//     console.log("MONDAY");
//     break;
//   case 2:
//     console.log("TUESDAY");
//     break;
//   case 3:
//     console.log("WEDNESDAY");
//     break;
//   case 4:
//     console.log("THURSDAY");
//     break;
//   case 5:
//     console.log("FRIDAY");
//     break;
//   case 6:
//     console.log("SATURDAY");
//     break;

//   default:
//     break;






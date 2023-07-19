// filter
function fil(arr, frc) {
  let fc = [];
  for (let i = 0; i < arr.length; i++) {
    if (frc(arr[i])) {
      fc.push(arr[i]);
    }
  }
  return fc;
}
console.log(
  fil([10, 20, 30, 6, 40, 50, 70], value => {
    return value > 10;
  })
);

let filled = [100, 200, 300, 400, 500, 600];
console.log(filled.filter(ok => ok > 300));

let st = [150, 110, 180, 240, 650, 2540];
let mf = st.map(val => val + val * 0.2);
console.log(mf);

console.log(mf.filter(gt => gt > 200));

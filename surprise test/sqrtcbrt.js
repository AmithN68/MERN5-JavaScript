let num = Number(prompt("enter the number:"))
let input = prompt("type sqrt for square root or type cbrt for cube root").toUpperCase();

switch (input) {
    case ("sqrt"): console.log(num ** (1 / 2));
        break;
    case ("cbrt"): console.log(num ** (1 / 3));
        break;
    default: console.log("invalid choice");
        break;
}
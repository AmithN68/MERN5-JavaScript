let a = 10;
let b = 20;
let c = 15;

// if block
if (a < b) {
    console.log("a is less than b");
}

// if else block
if (b < c) {
    console.log("b is small")
} else {
    console.log("b is greater");
}

// else if ladder block
if (a > b) {
    if (a > c) {
        console.log("a is big");
    }
}
else if (b > c) {
    console.log("b is big");
}
else {
    console.log("c is big");
}

// switch
// let m = prompt("enter the character").toLowerCase();
m = "a";
switch (m) {
  case "a": {
    console.log("vowel");
    break;
  }
  case "e": {
    console.log("vowel");
    break;
  }
  case "i": {
    console.log("vowel");
    break;
  }
  case "o": {
    console.log("vowel");
    break;
  }
  case "u": {
    console.log("vowel");
    break;
    }
    default: {
        console.log("consonant");
    }
}

n = "g";
switch (n) {
  case "a":
  case "e":
  case "i":
  case "o":
    case "u":
        console.log("vowel");
        break;
    default:
        console.log("consonant")
}


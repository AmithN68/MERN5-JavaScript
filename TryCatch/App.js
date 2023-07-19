function x() {
    try {
        console.log("try");
    } catch {
        console.log("catch");
    } finally {
        console.log("finally");
    }
}
x();

function y() {
  try {
    return "try";
  } catch {
    return "catch";
  } finally {
    return "finally from return block";
  }
}
console.log(y()); 

let x = "";
try {
    x=str("hello","world")
} catch (error) {
    console.log(error);
} finally {
    console.log("finally");
}
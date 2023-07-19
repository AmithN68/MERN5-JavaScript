// let p = new Promise((res, rej) => {
//     let isRoomCleaned = true;
//     if (isRoomCleaned) {
//         document.write("yes room is cleaned");
//         res("your room is cleaned")
//     }
//     else {
//         document.write("clean the room");
//         rej("please clean the room");
//     }
// })
// p.then(val => console.log(val)).catch(val => console.log(val)).finally(() => { console.log("function is executed") })



let a = new Promise((x, y) => {
    if (taskComplete = true) {
      document.write("take a break");
        x("you can take a break");
        document.body.style.background = "lightGreen";
        document.body.style.fontSize = "35px";
        document.body.style.fontWeight = "bold";
        document.body.style.textAlign = "center";
        document.body.style.textDecoration = "underline";
        document.body.style.fontFamily = "cursive";
    } else {
      document.write("don't take a break");
        y("you can't take a break");
        document.body.style.background = "aqua";
    }
});
a.then(val => console.log(val)).catch(val => console.log(val)).finally(() => { console.log("task is completed") })



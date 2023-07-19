// console.log(window);

// let x = document.createElement('div');
// console.log(x);
// x.innerText = "hello sanguuu";
// console.log(x);
// x.style.color = "red";
// document.write(x);

// let x = document.getElementById('demo');
// x.style.color = "red";
// x.style.backgroundColor = "aqua";
// x.innerHTML = "<a>link</a>";
// x.innerText = "sanguuu";
// x.innerHTML = "manguu";
// console.log(x);

// let y = document.getElementsByClassName('cls');
// y[2].style.color = "yellow";
// y[2].style.backgroundColor = "red";
// console.log(y);


// let z = document.getElementById('demo'); let u = z.getElementsByTagName('h2');
// console.log(u);


// let l = document.getElementsByName("p1");
// console.log(l);



// queryselector
// let element = document.querySelector("#div~p");
// console.log(element);

// let element1 = document.querySelectorAll("#div~h1");
// let element2 = document.querySelectorAll("#div~p");
// console.log(element1);
// console.log(element2);
// element1.style.backgroundcolor = "green";


// function fun() {
//     const test = window.open();
//     test.document.open();
//     test.document.innerHTML('<h1>hello</h1>');
// }

// function fun() {
//     window.close();
// }


// let div = document.createElement("div");
// div.style.width = "30rem";
// div.style.height = "30rem";
// div.style.border = "0.3rem solid red";
// div.style.backgroundColor = "aqua";
// div.style.borderRadius = "5rem";
// div.style.marginBottom = "5rem";
// document.body.appendChild(div);

// let h1 = document.createElement("h1");
// h1.innerText = "heading 1";
// h1.style.color = "blue";
// h1.style.position = "relative";
// h1.style.top = "3rem";
// h1.style.left = "4rem"
// div.appendChild(h1);


// nav bar
let section = document.createElement("section");
section.style.height = "15vh";
section.style.width = "100%";
section.style.backgroundColor = "red";
document.body.appendChild(section);

let div = document.createElement("div");
div.style.height = "15vh";
div.style.width = "90%";
div.style.backgroundColor = "lightblue";
div.style.margin = "0 auto";
div.style.display = "flex";
div.style.alignItems="center"
section.appendChild(div);

let div1 = document.createElement("div");
div1.innerText = "logo";
div1.style.flexBasis = "30%";
div1.style.textAlign="center"
div.appendChild(div1);

let div2 = document.createElement("ul");
// div2.innerText = "home";
div2.style.display = "flex";
div2.style.justifyContent="space-around"
div2.style.listStyle="none"
div2.style.flexBasis = "70%";
div.appendChild(div2);

let li1 = document.createElement("li");
li1.innerText = "home";
li1.style.border = "0.2rem solid";
li1.style.padding = "0.25rem";
li1.style.backgroundColor = "pink";
div2.appendChild(li1);

let li2 = document.createElement("li");
li2.innerText = "login";
li2.style.border = "0.2rem solid";
li2.style.padding = "0.25rem";
li2.style.backgroundColor = "pink";
div2.appendChild(li2);

let li3 = document.createElement("li");
li3.innerText = "register";
li3.style.border = "0.2rem solid";
li3.style.padding = "0.25rem";
li3.style.backgroundColor = "pink";
div2.appendChild(li3);




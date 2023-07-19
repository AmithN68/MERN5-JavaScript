let section_1 = document.createElement("section");
section_1.style.width = "60%";
section_1.style.height = "130vh"
section_1.style.margin = "0 auto";
section_1.style.position="relative"
section_1.style.backgroundColor = "pink";
document.body.appendChild(section_1);

let head = document.createElement("h1");



head.innerText = "Book aRoom Form";
head.style.textAlign = "center";
section_1.appendChild(head);


let label1 = document.createElement("label");
label1.innerText = "First Name";
label1.style.position = "relative";
label1.style.left = "5rem";
section_1.appendChild(label1);

let label2 = document.createElement("label");
label2.innerText = "Last Name";
label2.style.position = "relative";
label2.style.left = "28rem";
section_1.appendChild(label2);

let break1 = document.createElement("br");
label2.appendChild(break1);


let input1 = document.createElement("input");
input1.style.width = "20rem";
input1.style.position = "absolute";
input1.style.left = "5rem";
section_1.appendChild(input1);

let input2 = document.createElement("input");
input2.style.width = "20rem";
input2.style.position = "absolute";
input2.style.left = "32.2rem";
section_1.appendChild(input2);

let break2 = document.createElement("br");
input2.appendChild(break2);

let label3 = document.createElement("label");
label3.innerText = "Email";
label3.style.position = "absolute";
label3.style.left = "5rem";
label3.style.top = "8rem";
section_1.appendChild(label3);

let input3 = document.createElement("input");
input3.style.width = "47.3rem";
input3.style.position = "absolute";
input3.style.left = "5rem";
input3.style.top = "9.3rem";
section_1.appendChild(input3);

let break3 = document.createElement("br");
input3.appendChild(break3);

let label4 = document.createElement("label");
label4.innerText = "Phone Number";
label4.style.position = "absolute";
label4.style.left = "5rem";
label4.style.top = "13rem";
section_1.appendChild(label4);

let input4 = document.createElement("input");
input4.style.width = "47.3rem";
input4.style.position = "absolute";
input4.style.left = "5rem";
input4.style.top = "14.3rem";
input4.placeholder="+91 8951946105"
input4.setAttribute("type", "number");
section_1.appendChild(input4);

// !date of arrival
let break4 = document.createElement("br");
input4.appendChild(break4);

let label5 = document.createElement("label");
label5.innerText = "Date of Arrival";
label5.style.position = "absolute";
label5.style.left = "5rem";
label5.style.top = "18rem";
section_1.appendChild(label5);

let input5 = document.createElement("input");
input5.style.width = "47.3rem";
input5.style.position = "absolute";
input5.style.left = "5rem";
input5.style.top = "19.3rem";
input5.setAttribute("type", "date");
section_1.appendChild(input5);

// !date od departure
let break5 = document.createElement("br");
input5.appendChild(break5);

let label6 = document.createElement("label");
label6.innerText = "Date of Departure";
label6.style.position = "absolute";
label6.style.left = "5rem";
label6.style.top = "23rem";
section_1.appendChild(label6);


let input6 = document.createElement("input");
input6.style.width = "47.3rem";
input6.style.position = "absolute";
input6.style.left = "5rem";
input6.style.top = "24.3rem";
input6.setAttribute("type", "date");
section_1.appendChild(input6);


// !room type
let break6 = document.createElement("br");
input6.appendChild(break6);

let label7 = document.createElement("label");
label7.innerText = "Room Type";
label7.style.position = "absolute";
label7.style.left = "5rem";
label7.style.top = "28rem";
section_1.appendChild(label7);

let input7 = document.createElement("input");
input7.style.width = "47.3rem";
input7.style.position = "absolute";
input7.style.left = "-18rem";
input7.style.top = "29.3rem";
input7.setAttribute("type", "radio");
section_1.appendChild(input7);

let label8 = document.createElement("label");
label8.innerText = "single-$300 per day";
label8.style.position = "absolute";
label8.style.left = "7rem";
label8.style.top = "29.2rem";
section_1.appendChild(label8);

let break7 = document.createElement("br");
input7.appendChild(break7);

let input8 = document.createElement("input");
input8.style.width = "47.3rem";
input8.style.position = "absolute";
input8.style.left = "-18rem";
input8.style.top = "31.3rem";
input8.setAttribute("type", "radio");
section_1.appendChild(input8);

let label9 = document.createElement("label");
label9.innerText = "deluxe-$500 per day";
label9.style.position = "absolute";
label9.style.left = "7rem";
label9.style.top = "31.2rem";
section_1.appendChild(label9);

// !hgcjh
let break8 = document.createElement("br");
input8.appendChild(break8);

let input9 = document.createElement("input");
input9.style.width = "47.3rem";
input9.style.position = "absolute";
input9.style.left = "-18rem";
input9.style.top = "33.2rem";
input9.setAttribute("type", "radio");
section_1.appendChild(input9);

let label10 = document.createElement("label");
label10.innerText = "suite-$800 per day";
label10.style.position = "absolute";
label10.style.left = "7.1rem";
label10.style.top = "33.2rem";
section_1.appendChild(label10);


// !bshjb
let break9 = document.createElement("br");
input9.appendChild(break9);

let input10 = document.createElement("input");
input10.style.width = "47.3rem";
input10.style.position = "absolute";
input10.style.left = "-18rem";
input10.style.top = "35.3rem";
input10.setAttribute("type", "radio");
section_1.appendChild(input10);

let label11 = document.createElement("label");
label11.innerText = "presidential suite-$200 per day";
label11.style.position = "absolute";
label11.style.left = "7.1rem";
label11.style.top = "35.2rem";
section_1.appendChild(label11);


// !jafjkaf
let break10 = document.createElement("br");
input10.appendChild(break10);

let input11 = document.createElement("input");
input11.style.width = "47.3rem";
input11.style.position = "absolute";
input11.style.left = "5rem";
input11.style.top = "40.6rem";
input11.setAttribute("type", "Number");
section_1.appendChild(input11);

let label12 = document.createElement("label");
label12.innerText = "Number of Rooms Required";
label12.style.position = "absolute";
label12.style.left = "5rem";
label12.style.top = "39.2rem";
section_1.appendChild(label12);


// !fhsefgs
let break11 = document.createElement("br");
input11.appendChild(break11);

let input12 = document.createElement("input");
input12.style.width = "47.3rem";
input12.style.position = "absolute";
input12.style.left = "5rem";
input12.style.top = "45.6rem";
input12.style.height="15vh"
section_1.appendChild(input12);

let label13 = document.createElement("label");
label13.innerText = "Number of Rooms Required";
label13.style.position = "absolute";
label13.style.left = "5rem";
label13.style.top = "44.2rem";
section_1.appendChild(label13);










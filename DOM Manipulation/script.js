const box1 = document.getElementById("box-1");
box1.innerHTML = "hello nabir";
box1.style.backgroundColor = "red";

const boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].classList.add("box");
}

const newParagraph = document.createElement("p");
newParagraph.innerText = "This is me";
const container = document.getElementById("container");
container.appendChild(newParagraph);
newParagraph.classList.add("box");

// const myBody = document.body;
// console.log(myBody);
// const box2 = document.getElementById("box-2");
// console.log(box2);
// const divs = document.getElementsByTagName("div");
// console.log(divs);
// const boxes = document.getElementsByClassName("random");
// console.log(boxes);
// const random = document.querySelector(".container .random");
// console.log(random);

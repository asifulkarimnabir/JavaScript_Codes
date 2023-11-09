function myFunction() {
  console.log("clicked here");
}

// event listerner
const box3 = document.getElementById("box-3");
box3.addEventListener("click", () => {
  console.log("click here by event listener");
});
box3.addEventListener("click", (e) => {
  console.log("click here by event listener 2", e);
});

const nameInput = document.getElementById("nameInput");
nameInput.addEventListener("keydown", (e) => {
  console.log("key", e.key);
});

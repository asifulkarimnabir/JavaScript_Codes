// Loops

// for loop

// for (let index = 0; index < 5; index++) {
//   console.log("nabir", index);
// }
// for (let index = 0; index < 5; index = index + 2) {
//   console.log("nabir", index);
// }

// while loop

// let step = 0;
// while (step < 5) {
//   console.log("while loop");
//   step += 1;
// }

// do-while loop

// let steps = 0;
// do {
//   console.log("do-while loop", steps);
//   steps += 1;
// } while (steps < 5);

let step = 0;
while (step < 5) {
  step += 1;
  if (step == 2) {
    // continue;
    break;
  }
  console.log("while loop", step);
}

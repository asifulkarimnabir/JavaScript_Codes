function sum(a, b) {
  const sum = a + b;
  console.log("result", sum);
}

const a = 3;
const b = 7;
sum(a, b);

const c = 8;
const d = 7;
sum(c, d);

const e = 15;
const f = 5;
sum(e, f);

// function expression
const variables = function (num) {
  return num * num;
};

console.log(variables(3));

// nested function
function addNumber(a, b) {
  const first = number(a);
  const last = number(b);

  function number(add) {
    return add * add;
  }
  return first + last;
}
console.log(addNumber(3, 3));

// if else review

let age = 21;
let price = 0;

if (age >= 21) {
  // adult price
  price = 100;
} else {
  // child price
  price = 50;
}

// ternary (i.e. composed of three parts) operator
// part 1: condition
// condition ?
// part 2: if the condition is true do something
// price = 100
// part 3: if the condition is false do something

// syntax
// condition? "if true" : "if false"

// example
// the parenthesis are not necessary, for me this is added by prettier
age >= 21 ? (price = 100) : (price = 50);

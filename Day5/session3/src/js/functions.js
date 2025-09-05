// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Pragati")); // Hello, Pragati!

// Arrow function
const multiply = (a, b) => {a * b;}
console.log(multiply(4, 6)); // 24

// Single parameter arrow function
const squareRoot = x => x * x;
console.log(square(5)); // 25

// No parameter
const sayHello = () => "Hello!";
console.log(sayHello()); // Hello!

// All function declarations are effectively at the top of the scope
//console.log(square(5)); // 25

function square(n) {
  return n * n;
}

// ReferenceError: Cannot access 'square' before initialization
// console.log(square(5)); 
// const square = function (n) {
//   return n * n;
// };

//function calling
function sum() {
  let a = 5, b = 2;
  let s = a + b;
  console.log(s);
}
sum();

// Function scope with var
function VarScope() {
  if (true) {
    var x = 9;
  }
  console.log("var x:", x); // Accessible 
}
VarScope();

// Block scope with let/const
function BlockScope() {
  if (true) {
    let y = 27;
    const z = 35;
    console.log("Inside block:", y, z);
  }
  // console.log(y); //  ReferenceError
  // console.log(z); //  ReferenceError
}
BlockScope();

// Global vs Local Scope
let globalVar = "I am global variable";

function localScope() {
  let localVar = "I am local variable";
  
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}
localScope();
// console.log(localVar); //  ReferenceError

//recursive function
function factorial(n) {
  if (n <= 1) return 1;          // Base case: 0! = 1! = 1
  return n * factorial(n - 1);    // Recursive step
}

console.log("fact:", factorial(5)); //  120

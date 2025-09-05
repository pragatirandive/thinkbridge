// *****************************Variables exercise *****************************************
console.log(a);         //hoisting checking

var a = 10;         //var has global scope
a = 15;             //reassigned 
var a =27;          //redeclared
console.log(a);

let check = 10;         //declration
check = 27;             //reassigned
console.log(check);
let scope = () =>{
    let x = 20;
    console.log(x);
}
//console.log(x);         //let has block scope we cannot acess it outside

const c = 30;           // we cannot reassign & redecalre
console.log(c);
let scopeCheck = () =>{
    let x = 20;
    console.log(x);
}
//console.log(x);         //const has block scope we cannot acess it outside

// //*******************************Data Types Exercises*************************** */
//number
let number = 99;                   
let num2 = 27.27;
let bigNum = 13284685026208460856;

//string
let s = "Pargati";

//undefined
let un;
console.log(un);

//bollean
let bol = true;

//symbol creating unique identifiers.
const unique = Symbol("id");
console.log(unique);
const anotherId = Symbol("id");
console.log(unique);
console.log(unique === anotherId); // false

//object
users = {
    name : "Pragati",
    age: 24,
}
console.log(typeof(12));
console.log(typeof(12.99));
console.log(typeof("12"));
console.log(typeof(true));
console.log(typeof(null));
let data;
console.log(typeof(data));
console.log(typeof([1,2,3]));
const id = Symbol("id");
console.log(typeof(unique));
//********************Operators************************** */
let n1 = 10, n2 = 5;

console.log(a + check); //15
console.log(a - check); // 5  
console.log(a * check); // 50 
console.log(a / check); // 2 
console.log(a % check); // 0 
console.log(a ** check);  

let x = 7;

x += 3;  //10
x -= 2;  //5
x *= 2;  //14
x /= 3;  //2
x %= 3;  //1
x **= 2; //49

console.log(5 == "7");   // true  (loose equality, type converts)
console.log(5 === "7");  // false (strict equality, checks type)
console.log(5 != "7");   // false
console.log(5 !== "7");  // true
console.log(10 > 7);     // true
console.log(100 >= 100);   // true
console.log(5 < 3);      // false

console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true);  //false 

let n = 9;
console.log(++n); // 10 (Pre-increment)
console.log(n++); // 9 (Post-increment, then n=7)
console.log(--n); // 8(Pre-decrement)
console.log(n--); // 9 (Post-decrement, then n=5)


//**************************Array************************* */
let arr1 = [10,2, 3, 4,5,6];
arr1.push(6);        // [1, 2, 3, 4,5,6]
arr1.pop();          // [1, 2, 3]
arr1.unshift(0);     // [0, 1, 2, 3] remove 0
arr1.shift();        // [1, 2, 3]
console.log(arr1.includes(2)); // true

arr1.forEach( val => console.log(val + 2));

let mul = arr1.map(val => val * 2);
console.log(mul);

let reduce = arr1.reduce((prev ,curr)=>{
    let avg = prev + curr;
    console.log(avg / arr1.length)
});

let odd = arr1.filter(val => val%2 === 0);
console.log(odd);

let sort = arr1.sort((prev, curr) => prev - curr);
console.log(sort);
console.log(arr1.reverse());
let filled = [1,2,3].fill(7,8,9);
console.log(filled);

const merged = arr1.concat([6, 7]);
console.log(merged); 
const nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat());     
[1, 2, 3, 4, [5]]
console.log(nested.flat(2));    
[1, 2, 3, 4, 5]

//****************************conditional statements*************************** */
let w = 10, y = 20, z = 30;

if (a > n2) {
  if (a > c) {
    console.log("a is the largest");
  } else {
    console.log("c is the largest");
  }
} else {
  if (n2 > c) {
    console.log("b is the largest");
  } else {
    console.log("c is the largest");
  }
}


let score = 86;     //(condition) ? true : false
let grade = (score >= 90) ? "A"
           : (score >= 75) ? "B"
           : (score >= 50) ? "C"
           : "Fail";

console.log(`Grade: ${grade}`);

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("This is apple");
    break;
  case "mango":
        console.log("This is a Mango");
        break;
  case "banana":
    console.log("This is a banana");
    break;
  default:
    console.log("Not a fruit");
}

//*******************************Loops ************************/
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

let arr = [10, 20, 30];
arr1.custom = 40;

for (let key in arr1) {
  console.log(key, arr1[key]);
}

let num = 0;
while (number < 5) {
  number++;
  if (number === 2) continue; // skip 2
  if (number === 4) break;    // stop loop at 4
  console.log(number);
}

let count = 5;
do {
  console.log("Runs at least once");
  count--;
} while (count < 0);


const numbers = [10, 20, 30];
for (let num of numbers) {
  console.log(num);
}

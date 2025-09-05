console.log("hello");
let a = 10;
console.log("value of a is:",a);

console.log("pragram started debugging..... ");

let arr = [6,9,7,3,5]
function topScorer(arr) {
  let top = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > top) {
      top = arr[i];
    }
  }
  return top;
}

const topper = topScorer(arr); // 🔹 breakpoint here

console.log("topper:",topper);

console.log("tasks completed");
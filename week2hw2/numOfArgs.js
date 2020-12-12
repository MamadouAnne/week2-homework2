//Write a function that returns the number
// of arguments passed to the function when called.
let arr = [];
function numOfArgs(...arr) {
  console.log(arr.length);
}

console.log(numOfArgs(2, 5, 6, 7, 9));

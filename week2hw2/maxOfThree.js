//Define a function maxOfThree that takes three numbers
//as arguments and returns the largest of them.
console.log(maxOfThree(11, 140, 90));

function maxOfThree(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  else return c;
}

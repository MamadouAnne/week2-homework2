// function maxOfTwoNumbers (x,y){
//   if (x>y){
//       return x;
//   }else{
//       return y;
//   }
//
// }
//
// var largerNumber = maxOfTwoNumbers(45,93);
//
// console.log(largerNumber);

function vawelOrNo(x) {
  if (x == "a" || x == "A") {
    return true;
  } else if (x == "e" || x == "E") {
    return true;
  } else if (x == "i" || x == "i") {
    return true
  } else if (x == "o" || x == "O") {
    return true;
  } else if (x == "u" || x == "U") {
    return true;
  } else {
    return false;
  }
}

console.log(vawelOrNo("A"));

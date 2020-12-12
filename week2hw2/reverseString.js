// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".

function reverse(str) {
  let word = str.split(); // convert the string to an array
  let reversedString = word.reverse(); // reverse the string arry
  let result = reversedString.toString(); // convert the array to a string
  return result;
}

console.log(reverse("jag testar"));

//second way of doing this.

// function reverse(str) {
//     var text = '';

//     for (var i = str.length - 1; i >= 0; i--) {
//     	text += str[i];
//     	continue
//     }
//     return text.toLowerCase();
// }
// console.log(reverse("Kosal"));

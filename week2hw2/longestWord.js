//Write a function findLongestWord that takes an array
// of words and returns the length of the longest one.

function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

console.log(
  findLongestWordLength("The quickbook brown fox jumped over the lazy dog")
);

// function findLongestWord(arr) {
//   let word = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (word.length < arr[i].length) {
//       word = arr[i];
//     }
//   }
//   return word;
// }
// function findLongestWord(arr) {
//   return arr.reduce((a, b) => (a.length < b.length ? b : a), "");
// }
// console.log(findLongestWord(["bloomburg", "hello"]));
// //console.log(findLongestWord(['boop', 'software ', 'helloooooooooo']));

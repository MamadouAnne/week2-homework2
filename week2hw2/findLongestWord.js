//Write a function findLongestWord that takes an array of words
//and returns the length of the longest one.

function findLongestWord(str) {
  for (let word in str) {
    console.log(word);
    for (let long in str)
      if (word.length > long.length) console.log(word, word.length);
  }
}

console.log(findLongestWord("bahhh, ijiikfow, uduifhuhe,qjiwodjjwjdioef"));

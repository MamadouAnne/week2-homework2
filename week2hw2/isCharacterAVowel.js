//Write a function isCharacterAVowel that takes a character
//(i.e. a string of length 1) and returns true if it is a vowel,
// false otherwise.

function isCharacterAVowel(char) {
  if (
    char === "a" ||
    char === "A" ||
    char === "e" ||
    char === "E" ||
    char === "i" ||
    char === "I" ||
    char === "u" ||
    char === "U" ||
    char === "o" ||
    char === "O"
  )
    return true;
  else return false;
}
console.log(isCharacterAVowel("b"));

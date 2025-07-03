function kthCharacter(k: number): string {
  let word = "a";

  while (word.length < k) {
    for (let char of word) {
      word += getNextLetter(char);
    }
  }

  return word.charAt(k - 1);
}

function getNextLetter(char: string) {
  // Default case when end of alphabet is reached
  if (char === "z") return "a";

  const charCode = char.charCodeAt(0);
  const nextChar = String.fromCharCode(charCode + 1);

  return nextChar;
}

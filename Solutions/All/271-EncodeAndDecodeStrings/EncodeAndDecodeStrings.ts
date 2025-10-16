enum Seperator {
  Char = "-",
  Word = "#",
}

/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
  let encodedWords = "";
  strs.forEach((word, i) => {
    let encodedWord = "";
    for (let i = 0; i < word.length; i++) {
      let encodedChar = String(word.charCodeAt(i));
      if (i < word.length - 1) encodedChar += Seperator.Char; // Add sperator if not last char
      encodedWord += encodedChar;
    }
    if (i < strs.length - 1) encodedWord += Seperator.Word; // Add seperator if not last word
    encodedWords += encodedWord;
  });

  return encodedWords;
}

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
  let decodedWords: string[] = [];
  const encodedWords = s.split(Seperator.Word);
  for (let encodedWord of encodedWords) {
    let decodedWord = "";
    const encodedChars = encodedWord.split(Seperator.Char);
    for (let encodedChar of encodedChars) {
      if (!encodedChar) continue;
      decodedWord += String.fromCharCode(Number(encodedChar));
    }
    decodedWords.push(decodedWord);
  }

  return decodedWords;
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

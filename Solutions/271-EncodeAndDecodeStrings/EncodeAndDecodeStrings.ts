/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
  let stringifiedStrs = "";

  strs.forEach((word, i) => {
    let stringifiedWord = "";
    for (const char of word) {
      const charCode = char.charCodeAt(0);
      const stringifiedLetter = charCode + ",";
      stringifiedWord += stringifiedLetter;
    }

    // Append "#" after each word, unless it is the last one
    // This causes an additional [""] to be added when decoding with `.split("#")`
    if (i !== strs.length - 1) stringifiedWord += "#";
    stringifiedStrs += stringifiedWord;
  });

  return stringifiedStrs;
}

/**
 
 */

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
  const words: string[] = [];
  console.log(s);

  const stringifedWords = s.split("#");
  for (const stringifedWord of stringifedWords) {
    let word = "";
    const charCodes = stringifedWord.split(",");

    for (const charCode of charCodes) {
      if (charCode === "") continue;
      word += String.fromCharCode(Number(charCode));
    }
    words.push(word);
  }

  return words;
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

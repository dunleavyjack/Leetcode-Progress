const CHAR_SEPARATOR = "-";
const WORD_SEPARATOR = "_";

/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
  let encodedStrs = "";
  for (let i = 0; i < strs.length; i++) {
    if (i !== 0) encodedStrs += WORD_SEPARATOR;

    const word = strs[i];
    let encodedWord = "";

    for (let i = 0; i < word.length; i++) {
      if (i !== 0) encodedWord += CHAR_SEPARATOR;

      const charCode = word[i].charCodeAt(0);
      encodedWord += charCode;
    }

    encodedStrs += encodedWord;
  }

  return encodedStrs;
}

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
  let decodedStrs: string[] = [];

  for (let encodedWord of s.split(WORD_SEPARATOR)) {
    let decodedWord = "";
    for (let encodedChar of encodedWord.split(CHAR_SEPARATOR)) {
      if (!encodedChar) continue;
      decodedWord += String.fromCharCode(Number(encodedChar));
    }
    decodedStrs.push(decodedWord);
  }

  return decodedStrs;
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

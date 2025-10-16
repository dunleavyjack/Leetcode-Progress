function validWordAbbreviation(word: string, abbr: string): boolean {
  let wordPointer = 0;
  let abbrPointer = 0;

  while (wordPointer < word.length) {
    if (word[wordPointer] === abbr[abbrPointer]) {
      wordPointer++;
      abbrPointer++;
      continue;
    }

    let numLength = abbrPointer;
    let numString = "";
    while (numLength < abbr.length && isStringifiedNumber(abbr[numLength])) {
      numString += abbr[numLength];
      numLength++;
    }

    if (!numString || numString[0] === "0") {
      return false;
    }

    wordPointer += Number(numString);
    abbrPointer = numLength;
  }

  return wordPointer === word.length && abbrPointer === abbr.length;
}

function isStringifiedNumber(char: string) {
  return !isNaN(Number(char));
}

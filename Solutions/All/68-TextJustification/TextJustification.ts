function fullJustify(words: string[], maxWidth: number): string[] {
  let result: string[] = [];

  let line: string[] = [];
  let lineCharLength = 0;

  let i = 0;
  while (i < words.length) {
    const word = words[i];
    const spaces = line.length;

    if (lineCharLength + word.length + spaces <= maxWidth) {
      line.push(word);
      lineCharLength += word.length;
      i++;
    } else {
      // Current word extends past maxWidth.
      // Complete the current line, and try again without incrementing i.
      let extraSpaces = maxWidth - lineCharLength;
      let remainder = extraSpaces % (spaces - 1 || 1); // Prevent divide by 0
      let space = Math.floor(extraSpaces / (spaces - 1 || 1));

      for (let j = 0; j < Math.max(1, spaces - 1); j++) {
        line[j] += " ".repeat(space);
        if (remainder > 0) {
          line[j] += " ";
          remainder--;
        }
      }

      result.push(line.join(""));
      line = [];
      lineCharLength = 0;
    }
  }

  // Final line. This will be reached when the words input is exhausted.
  let finalLine = line.join(" ");
  let trailingSpace = maxWidth - finalLine.length;
  result.push(finalLine + " ".repeat(trailingSpace));

  return result;
}

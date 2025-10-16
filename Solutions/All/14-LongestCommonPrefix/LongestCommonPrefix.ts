function longestCommonPrefix(strs: string[]): string {
  // At first, the entire first word is a potential candidate as the prefix.
  // The idea will be to shrink it as we go along.
  let prefix = strs[0];

  // Iterate through the words in the strings array
  for (let word of strs) {
    // Create a value to store the prefix between the current prefix and the current word
    let commonPrefix = "";

    // Iterate through the characters of the word, and compare with the prefix.
    for (let i = 0; i < word.length; i++) {
      if (word[i] === prefix[i]) {
        // If the characters match, add it to the common predfix
        commonPrefix += word[i];
      } else {
        // Otherwise, break out of the loop
        break;
      }
    }

    // Set the prefix for the next iteration.
    prefix = commonPrefix;
  }

  return prefix;
}

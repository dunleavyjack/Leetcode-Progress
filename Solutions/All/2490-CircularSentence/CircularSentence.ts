function isCircularSentence(sentence: string): boolean {
  if (!sentence || sentence[0] !== sentence[sentence.length - 1]) return false;

  for (let i = 0; i < sentence.length; i++) {
    // Only check when a space occurs.
    if (sentence[i] !== " ") continue;

    const prevCharIndex = i - 1;
    const nextCharIndex = i + 1;

    if (
      // Check out of bounds
      prevCharIndex < 0 ||
      nextCharIndex >= sentence.length ||
      // Check not a space (only one space allowed)
      sentence[prevCharIndex] === " " ||
      sentence[nextCharIndex] === " " ||
      // Finally, actually compare to see if circular
      sentence[prevCharIndex] !== sentence[nextCharIndex]
    )
      return false;
  }

  return true;
}

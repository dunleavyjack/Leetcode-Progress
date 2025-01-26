function minRemoveToMakeValid(s: string): string {
  let open = 0;
  let closed = 0;
  let firstPass = "";

  for (let char of s) {
    // Character is a letter
    if (char !== "(" && char !== ")") {
      firstPass += char;
      // Character is an open paren
    } else if (char === "(") {
      open++;
      firstPass += char;
      // Character is a closed paren
    } else {
      if (closed < open) {
        firstPass += char;
        closed++;
      }
    }
  }

  // Reset open and closed and create a new var for the result
  open = 0;
  closed = 0;
  let secondPass = "";

  for (let i = firstPass.length - 1; i >= 0; i--) {
    const char = firstPass[i];

    // Character is a letter
    if (char !== "(" && char !== ")") {
      secondPass = char + secondPass;
      // Character is an open paren (going backwards)
    } else if (char === ")") {
      open++;
      secondPass = char + secondPass;
      // Character is a closed paren (going backwards)
    } else {
      if (closed < open) {
        closed++;
        secondPass = char + secondPass;
      }
    }
  }

  return secondPass;
}

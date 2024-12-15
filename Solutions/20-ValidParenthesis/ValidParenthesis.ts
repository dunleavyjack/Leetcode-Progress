function isValid(s: string): boolean {
  // Create a stack to track visited open parens
  const openParens: string[] = [];

  // Iterate through the characters of s.
  // If you visit an open paren, add it to the stack, otherwise see if it matches the last one in the stack
  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      openParens.push(char);
    } else {
      const lastOpenParen = openParens.pop();
      if (
        !lastOpenParen ||
        (lastOpenParen === "(" && char !== ")") ||
        (lastOpenParen === "[" && char !== "]") ||
        (lastOpenParen === "{" && char !== "}")
      )
        return false;
    }
  }

  // Important: Check if the stack has any length before returning true!
  return openParens.length ? false : true;
}

function isValid(s: string): boolean {
  let stack: string[] = [];

  if (s.length % 2 !== 0) return false;

  for (let char of s) {
    if (char === "{" || char === "(" || char === "[") {
      stack.push(char);
    } else {
      const lastInStack = stack.pop();
      if (
        (char === "}" && lastInStack !== "{") ||
        (char === "]" && lastInStack !== "[") ||
        (char === ")" && lastInStack !== "(")
      )
        return false;
    }
  }

  if (stack.length) return false;
  return true;
}

function isValid(s: string): boolean {
  let openParens: ("{" | "[" | "(")[] = [];

  for (let char of s) {
    if (char === "{" || char === "(" || char === "[") {
      openParens.push(char);
    } else {
      const lastOpened = openParens.pop();
      if (
        !lastOpened ||
        (lastOpened === "{" && char !== "}") ||
        (lastOpened === "[" && char !== "]") ||
        (lastOpened === "(" && char !== ")")
      )
        return false;
    }
  }

  return !openParens.length;
}

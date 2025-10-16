enum Paren {
  Open = "(",
  Closed = ")",
}

enum SquareBracket {
  Open = "[",
  Closed = "]",
}

enum CurlyBracket {
  Open = "{",
  Closed = "}",
}

function isValid(s: string): boolean {
  let openParens: string[] = [];

  for (let i = 0; i < s.length; i++) {
    // Always push open parens to the stack
    if (
      s[i] === Paren.Open ||
      s[i] === SquareBracket.Open ||
      s[i] === CurlyBracket.Open
    )
      openParens.push(s[i]);
    else {
      // When closed paren is reached, pop last open paren from the stack and compare.
      // Return false if there is no match, or if stack is empty
      const lastOpenParen = openParens.pop();
      if (
        !lastOpenParen ||
        (s[i] === Paren.Closed && lastOpenParen !== Paren.Open) ||
        (s[i] === SquareBracket.Closed &&
          lastOpenParen !== SquareBracket.Open) ||
        (s[i] === CurlyBracket.Closed && lastOpenParen !== CurlyBracket.Open)
      )
        return false;
    }
  }

  // In cases where there are left over open parens, we want to return false. Otherwise, true!
  return !openParens.length;
}

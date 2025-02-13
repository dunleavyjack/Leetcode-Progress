enum SQUARE {
  OPEN = "[",
  CLOSED = "]",
}

enum SQUIGGLE {
  OPEN = "{",
  CLOSED = "}",
}

enum PAREN {
  OPEN = "(",
  CLOSED = ")",
}

export function isValid(s: string): boolean {
  const openParens: string[] = [];

  for (const char of s) {
    if (char === SQUARE.OPEN || char === SQUIGGLE.OPEN || char === PAREN.OPEN)
      openParens.push(char);
    else {
      const lastParen = openParens.pop();
      if (
        !lastParen ||
        (char === SQUARE.CLOSED && lastParen !== SQUARE.OPEN) ||
        (char === SQUIGGLE.CLOSED && lastParen !== SQUIGGLE.OPEN) ||
        (char === PAREN.CLOSED && lastParen !== PAREN.OPEN)
      )
        return false;
    }
  }

  return !openParens.length;
}

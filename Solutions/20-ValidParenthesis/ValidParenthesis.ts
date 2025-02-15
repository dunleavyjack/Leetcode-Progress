enum PAREN {
  OPEN = "(",
  CLOSED = ")",
}

enum SQUARE {
  OPEN = "[",
  CLOSED = "]",
}

enum SQUIGGLE {
  OPEN = "{",
  CLOSED = "}",
}

function isValid(s: string): boolean {
  let openParens: string[] = [];

  for (let paren of s) {
    if (
      paren === PAREN.OPEN ||
      paren === SQUARE.OPEN ||
      paren === SQUIGGLE.OPEN
    )
      openParens.push(paren);
    else {
      const lastOpenParen = openParens.pop();
      if (
        !lastOpenParen ||
        (paren === PAREN.CLOSED && lastOpenParen !== PAREN.OPEN) ||
        (paren === SQUARE.CLOSED && lastOpenParen !== SQUARE.OPEN) ||
        (paren === SQUIGGLE.CLOSED && lastOpenParen !== SQUIGGLE.OPEN)
      )
        return false;
    }
  }

  return !openParens.length;
}

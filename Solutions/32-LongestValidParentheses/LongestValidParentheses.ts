enum PAREN {
  OPEN = "(",
  CLOSED = ")",
}

function longestValidParentheses(s: string): number {
  let arr = Array.from({ length: s.length }, () => 0);
  let openParenPosition: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === PAREN.OPEN) {
      openParenPosition.push(i);
    } else {
      const lastOpenParenPosition = openParenPosition.pop();
      if (lastOpenParenPosition !== undefined) {
        arr[lastOpenParenPosition] = 1;
        arr[i] = 1;
      }
    }
  }

  let max = 0;
  let curr = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      curr++;
      max = Math.max(max, curr);
    } else {
      curr = 0;
    }
  }

  return max;
}

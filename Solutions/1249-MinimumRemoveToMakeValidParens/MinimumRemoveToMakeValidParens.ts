function minRemoveToMakeValid(s: string): string {
  let validOpen = 0;
  let validClosed = 0;

  for (let char of s) {
    if (char === "(") {
      validOpen++;
    } else if (char === ")") {
      if (validOpen === validClosed) continue;
      validClosed++;
    }
  }

  validOpen = Math.min(validOpen, validClosed);
  validClosed = Math.min(validOpen, validClosed);

  let result = "";
  for (let char of s) {
    if (char === "(") {
      if (!validOpen) continue;
      validOpen--;
    } else if (char === ")") {
      if (!validClosed || validOpen === validClosed) continue;
      validClosed--;
    }

    result += char;
  }

  return result;
}

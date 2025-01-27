function minAddToMakeValid(s: string): number {
  let open = 0;
  let closed = 0;
  let amountToAdd = 0;

  for (let char of s) {
    if (char == "(") {
      open++;
    } else {
      if (closed < open) {
        closed++;
      } else {
        amountToAdd++;
      }
    }
  }

  return amountToAdd + (open - closed);
}

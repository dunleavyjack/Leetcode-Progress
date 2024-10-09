function minAddToMakeValid(s: string): number {
  let openParens: string[] = [];
  let numOfAdds = 0;

  for (const char of s) {
    if (char === "(") {
      openParens.push(char);
    } else {
      if (!openParens.length) {
        numOfAdds++;
      } else {
        openParens.pop();
      }
    }
  }

  return numOfAdds + openParens.length;
}

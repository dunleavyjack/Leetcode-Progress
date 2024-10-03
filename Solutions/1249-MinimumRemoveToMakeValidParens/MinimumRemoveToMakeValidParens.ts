function minRemoveToMakeValid(s: string): string {
  let numOpen = 0;
  let numClosed = 0;
  let firstPass = "";
  let secondPass = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") numOpen++;
    else if (s[i] === ")") {
      if (numClosed >= numOpen) continue;
      else numClosed++;
    }
    firstPass += s[i];
  }

  numOpen = 0;
  numClosed = 0;

  for (let i = firstPass.length - 1; i >= 0; i--) {
    if (firstPass[i] === ")") numClosed++;
    else if (firstPass[i] === "(") {
      if (numOpen >= numClosed) continue;
      else numOpen++;
    }
    secondPass = firstPass[i] + secondPass;
  }

  return secondPass;
}

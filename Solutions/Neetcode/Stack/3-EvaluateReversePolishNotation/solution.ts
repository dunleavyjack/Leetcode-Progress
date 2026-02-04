function evalRPN(tokens: string[]): number {
  const numStack: number[] = [];

  for (let token of tokens) {
    if (!isNaN(Number(token))) {
      numStack.push(Number(token));
      continue;
    }

    const num2 = numStack.pop()!;
    const num1 = numStack.pop()!;
    if (token === "+") {
      numStack.push(Number(num1) + Number(num2));
    } else if (token === "-") {
      numStack.push(num1 - num2);
    } else if (token === "*") {
      numStack.push(num1 * num2);
    } else if (token === "/") {
      numStack.push(Math.trunc(num1 / num2));
    }
  }

  return numStack[0];
}

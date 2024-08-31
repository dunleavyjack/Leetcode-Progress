function evalRPN(tokens: string[]): number {
  let stack: number[] = [];

  for (let token of tokens) {
    if (token === "+") {
      const lastNum = stack.pop() as number;
      const secondToLastNum = stack.pop() as number;
      stack.push(secondToLastNum + lastNum);
    } else if (token === "*") {
      const lastNum = stack.pop() as number;
      const secondToLastNum = stack.pop() as number;
      stack.push(secondToLastNum * lastNum);
    } else if (token === "/") {
      const lastNum = stack.pop() as number;
      const secondToLastNum = stack.pop() as number;
      stack.push(Math.trunc(secondToLastNum / lastNum));
    } else if (token === "-") {
      const lastNum = stack.pop() as number;
      const secondToLastNum = stack.pop() as number;
      stack.push(secondToLastNum - lastNum);
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}

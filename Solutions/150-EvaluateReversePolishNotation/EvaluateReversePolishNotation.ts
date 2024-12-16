function evalRPN(tokens: string[]): number {
  let stack: number[] = [];

  for (let token of tokens) {
    // Addition
    if (token === "+") {
      const lastNum = stack.pop() as number;
      const firstNum = stack.pop() as number;
      stack.push(firstNum + lastNum);

      // Subtraction
    } else if (token === "-") {
      const lastNum = stack.pop() as number;
      const firstNum = stack.pop() as number;
      stack.push(firstNum - lastNum);

      // Division (truncating towards 0)
    } else if (token === "/") {
      const lastNum = stack.pop() as number;
      const firstNum = stack.pop() as number;
      stack.push(Math.trunc(firstNum / lastNum));

      // Multiplication
    } else if (token === "*") {
      const lastNum = stack.pop() as number;
      const firstNum = stack.pop() as number;
      stack.push(firstNum * lastNum);

      // Otherwise, push the number to the stack
    } else {
      stack.push(Number(token));
    }
  }

  // Since the stack contains the running total, return it
  return stack[0];
}

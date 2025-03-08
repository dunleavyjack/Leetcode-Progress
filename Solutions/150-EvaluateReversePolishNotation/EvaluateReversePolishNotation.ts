enum Operator {
  Addition = "+",
  Subtraction = "-",
  Multiplication = "*",
  Division = "/",
}

function evalRPN(tokens: string[]): number {
  const numStack: number[] = [];

  for (const token of tokens) {
    if (!isOperator(token)) {
      numStack.push(Number(token));
      continue;
    }

    const numTwo = numStack.pop() as number;
    const numOne = numStack.pop() as number;

    if (token === Operator.Addition) {
      numStack.push(numOne + numTwo);
    } else if (token === Operator.Subtraction) {
      numStack.push(numOne - numTwo);
    } else if (token === Operator.Multiplication) {
      numStack.push(numOne * numTwo);
    } else {
      numStack.push(Math.trunc(numOne / numTwo));
    }
  }

  return numStack[0];
}

function isOperator(token: string) {
  if (
    token === Operator.Addition ||
    token === Operator.Subtraction ||
    token === Operator.Multiplication ||
    token === Operator.Division
  )
    return true;
}

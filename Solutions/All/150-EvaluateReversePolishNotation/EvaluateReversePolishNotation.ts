enum Operator {
  Addition = "+",
  Subtraction = "-",
  Multiplication = "*",
  Division = "/",
}

function evalRPN(tokens: string[]): number {
  const numStack: number[] = [];

  for (const token of tokens) {
    // If the token is a number, push it to the stack
    if (!isOperator(token)) {
      numStack.push(Number(token));
      continue;
    }

    // Otherwise, the token is an operator. Grab the last two nums from the stack and perform the operator's operation
    // Then, push it back into the num stack
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

  // There will always be one number left, the result!
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

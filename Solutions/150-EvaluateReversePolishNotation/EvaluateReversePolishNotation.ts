enum OPERATORS {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "*",
  DIVIDE = "/",
}

function evalRPN(tokens: string[]): number {
  let numStack: number[] = [];

  for (let token of tokens) {
    if (isNumber(token)) {
      numStack.push(Number(token));
    } else {
      const secondNum = numStack.pop() as number;
      const firstNum = numStack.pop() as number;

      if (token === OPERATORS.ADD) {
        numStack.push(firstNum + secondNum);
      } else if (token === OPERATORS.SUBTRACT) {
        numStack.push(firstNum - secondNum);
      } else if (token === OPERATORS.DIVIDE) {
        numStack.push(Math.trunc(firstNum / secondNum));
      } else if ((token = OPERATORS.MULTIPLY)) {
        numStack.push(firstNum * secondNum);
      }
    }
  }

  return numStack[0];
}

function isNumber(char: string) {
  return !isNaN(Number(char));
}

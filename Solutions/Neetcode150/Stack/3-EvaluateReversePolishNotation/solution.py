from typing import List
from math import trunc


class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for t in tokens:
            if t == "+":
                num2 = stack.pop()
                num1 = stack.pop()
                stack.append(num1 + num2)
            elif t == "-":
                num2 = stack.pop()
                num1 = stack.pop()
                stack.append(num1 - num2)
            elif t == "/":
                num2 = stack.pop()
                num1 = stack.pop()
                stack.append(trunc(num1 / num2))

            elif t == "*":
                num2 = stack.pop()
                num1 = stack.pop()
                stack.append(num1 * num2)
            else:
                stack.append(int(t))

        return stack[0]

# Notes

For this one, you can use a stack to keep track of numbers as you iterate
through the input. When an operator is reached, retrieve the last two values
from the stack using two separate `.pop()` calls. Then, preform the operation on
those two numbers and, this is key, push the result back into the stack. There
doesn't need to be a separate result variable. You need the running total to be
inside the stack so it can be used for future computation.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

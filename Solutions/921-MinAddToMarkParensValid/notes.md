# Notes

Pretty similar to Leetcode #20 Valid Parenthesis.

The idea is to use a stack and another variable to track the number of "adds".
For each letter in the input sting, add all open parenthesis to the stack. When
you encounter a closed parenthesis, you have two choices. If the stack is currently
empty, you should add one to the "adds" variable. Otherwise, remove the last value
from the stack.

Finally, combine the "adds" variable and the length of the stack to find your solution.

Time Complexity: 0(n)
Space Complexity: 0(n)

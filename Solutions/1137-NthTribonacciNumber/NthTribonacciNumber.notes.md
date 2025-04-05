# Notes: LC 1137 Nth Tribonacci Number

This one is another DP problem. It's similar to the classic Fibonacci Number
problem, except you are looking for the sum of the last three numbers. The
equation looks like: `t(n) = t(n - 1) + t(n - 2) + t(n - 3)`.

The only big difference is that the base case for the recursion has to handle
`2`, which should return 1.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

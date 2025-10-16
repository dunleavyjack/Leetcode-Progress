# Notes: LC 509 Fibonacci Number

This one can be solved with DP and memoization. The idea is to start identify
the sub-problem, which in the fib sequence is the sum of the `f(n - 1)` and
`f(n - 2`. The base case for this problem is that if `n` is either 0 or 1,
return `n`. This means you've reached the start (or near start) of the fib
sequence.

Finally, you can add memoization to improve the performance.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

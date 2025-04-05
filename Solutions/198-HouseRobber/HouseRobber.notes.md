# Notes: LC 198 House Robber

There are a bunch of different ways to solve this one! I want to practice
bottom-up DP, so I solved it that way.

The idea is to use a secondary array, in this case called `dp`, to solve each
"step" along the way. Each element in the `dp` array will represent the current
maximum at that "step", and the result will be the final element in that array.

This way, you only ever care about three numbers: the current number from the
input, the last number in the `dp` array (which represents the current max), and
the second to last number in the `dp` array plus the current number from the
input (which represents robbing the previous house and robbing the current
house).

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

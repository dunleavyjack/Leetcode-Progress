# Solution

This one is really similar to finding the max depth of the binary tree. The main
difference is that at each step, you combine the max left and max right to find
the diameter. Additionally, an internal `dfs` function needs to be written.

| Time | Space |
| ---- | ----- |
| 0(n) | 0(h)  |

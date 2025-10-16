# Notes: LC 337 House Robber III

This one isn't a true DP problem, unlike the previous House Robber problems. It
can be solved using DFS. The idea is make the DFS function return the current
sum _with the current value added_ or _without_.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

# Notes: LC 1261 Find Elements In Contaminated Binary Tree

DFS for the win. You don't actually need to store the "cleaned" tree. Just, as
you go, store the values in a hash set.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

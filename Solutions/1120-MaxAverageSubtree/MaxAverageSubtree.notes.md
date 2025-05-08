# Notes: LC 1120 Max Average Subtree

Pretty standard DFS problem. The trick is to return a tuple containing the total
count of nodes from the left and right sides of the current node, as well as the
current sum of those nodes' values.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

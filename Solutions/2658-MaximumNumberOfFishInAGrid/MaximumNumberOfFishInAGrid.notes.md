# Notes: LC 2658 Maximum Number Of Fish In A Grid

Very similar to the Max Area of Islands problem. Iterate through all cells, and
when a fish cell is reached preform a recursive DFS call to sum all connected
cells that also contain fish. Don't forget to set visited cells to `0` (a water
cell, for this problem), so you don't hit a TLE infinitely checking the same
cells.

| Time      | Space      |
| --------- | ---------- |
| O(n \* m) | O( n \* m) |

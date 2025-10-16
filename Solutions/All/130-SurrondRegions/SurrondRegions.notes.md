# Notes: LC 130 Surround Regions

This one is really interesting one, and the solution is simpler than it appears.

You want to iterate through all the cells in the grid twice. The first time, you
want to find any cell that is "O" and also on the boarder. A neat way to do this
is to write a `isBoardCell` function, which checks if the current `row` or `col`
is equal to the 0 or the length of `rows` or `cols` -1.

If a boarder "O" cell is found in the first iteration, you want to call a
recursive DFS function that changes all adjacent "O" cells to "T", a temporary
value to mark that cell as one not to "fill" later on.

Then, iterate through each cell in the grid again. This time, set any "O" cell
to "X" (filling it), and any temporary "T" cell back to "O", meaning: that cell
is adjacent to a cell that touches an edge.

| Time           | Space           |
| -------------- | --------------- |
| O(row \* cols) | O(rows \* cols) |

# Solution: LC 733 Floor Fill

For this one, the idea is to call a recursive dfs function on the provided cell.
The goal of the dfs function is to convert cells that are the same color as the
provided cell into the "fill" color.

For the base case, you want to `return` if the row or column pointers are out of
bounds, or if the current cell is not the same as the original color of the
first cell. You can pass in the original color of the first cell as a parameter
to the dfs call. Also, (important!) you want to ignore any cells that are
already the "fill" color. This prevents the dfs call from revisiting itself
after "filling" the color for an adjacent cell.

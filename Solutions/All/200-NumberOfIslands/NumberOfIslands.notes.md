# LC 200 Number of Islands Solution

The main idea here is to iterate through all cells in the grid looking for
islands. When an island is reached, increment the islands count and call a
recursive DFS function on that cell.

The goal of the DFS function is to mark all island cells as a non-island. Since
the island total has already been incremented, we want to make sure future
iterations do not land on another part of an already visited island and
mistakenly increment the count any additional times.

| Time      | Space     |
| --------- | --------- |
| O(n \* m) | O(n \* m) |

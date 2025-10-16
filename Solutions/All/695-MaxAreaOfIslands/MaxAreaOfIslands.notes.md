# Notes: LC 695 Max Area Of Islands

This one can be solved with a combination of LC200 Number of Islands and LC104
Max Depth Of Binary Tree. The principals of each problem are used here.

The overall approach is similar to the Number of Islands problem. You will need
to iterate through each cell in the grid, and when an island is found, you
perform DFS. That DFS call should explore the entire island, setting each
visited position from `1` to `0`. This prevents that cell from being checked
again.

The additional step is to also calculate the total `1`s in each island, which is
called the `area`. I followed the same idea as LC104 Max Depth Of Binary Tree,
except instead of the max depth I calculated the total depth, which is actually
easier. The idea is to return `0` when a boundary is reached and otherwise
perform DFS on all directions (in that problem, it was only left and right, and
in this problem it is up, down, left, right). Store the sum of all directions in
a value called `area`, and return `area + 1` after the recursive directional dfs
check.

This way, the top level return (the one inside the nested cell check) from
calling dfs on an island cell will return the total area of that island. You can
compare this with a top level max value, and return the greatest one at the end
of the problem. That's the answer.

Learnings:

1. I originally though (in this problem and in LC200 Number of Islands), that
   setting the island from `1` to `0` was only to prevent the that island from
   being "rediscovered" during the big nested iteration through each cell. I now
   realize that it's goal is also to prevent cell's from being rediscovered
   during the DFS call.

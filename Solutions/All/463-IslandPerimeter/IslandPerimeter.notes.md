# Notes: LC 463 Island Perimeter

Pretty similar to the other famous island problem. You need to iterate through
all of the cells until an island is reached, and then call a recursive dfs
function to traverse the island, keeping track of the perimeter. The only hard
part is understanding how to find the perimeter. Actually, it's not too bad.
Just any time you reach a water cell or an out-of-bounds cell, increase the
perimeter by one. This can be done in the dfs call's base case.

| Time      | Space     |
| --------- | --------- |
| O(r \* c) | O(r \* c) |

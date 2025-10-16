# Notes: LC 112 Path Sum

The key idea here is to use `dfs` to traverse the tree, checking if the current
node is a leaf (meaning it has no left and right nodes) and if the current value
is equal to the target.

One cool thing is using the original function as the recursive function.

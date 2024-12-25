# Notes: LC 236 Lowest Common Ancestor Binary Tree

This question is different than LC 235: Lowest Common Ancestor of a Binary
_Search_ Tree. In that question, you can use the fact that the left and right
sides of a binary search tree are ordered in order to solve the problem faster.
In this case, `p` and `q` could be anywhere.

The approach is like this: Use `dfs` (using the original function) to reach the
end of the tree, and then check the nodes on the way back up. If the current
node is **either** `p` or `q` return that node. Then, call the function on the
left and right children of the current node. If both values are not `null`, than
the current node is the lowest common ancestor. Otherwise, return which ever
node is valid, or null if neither are.

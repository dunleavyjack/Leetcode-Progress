# Notes: LC 199 Binary Tree Right Side View

This one is really similar to 102 Binary Tree level Order Traversal.
All you need to do is a level order traversal of the tree (the same
as that problem), and then iterate through the result grabbing the
last value from each level.

Some more detail: This question is actually pretty poorly worded. It
sounds like they only want the right values from the tree (basically,
just running dfs on only the right nodes), except they actually mean
the "right most" node at every level. It's as if you are standing on
the right side of the tree and you can still see left side nodes as
long as they aren't blocked by a right node. It's confusing but whatever.

So, the solution is to (just like LC102) to create an array of arrays of
values at each level. The dfs function needs a second parameter to track the
current level, which should start as 0.

Afterwards, just grab the last value from each level. That's it!

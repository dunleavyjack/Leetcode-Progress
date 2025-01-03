# Notes: LC 987 Veritcal Level Traversal Of Binary Tree

This problem can be solved by using `dfs` to traverse through the root while
using a hash map to keep track of the current vertical level. The idea is that
center of the tree is "level 0", and each level to the left is `level - 1` or
`level + 1` to the right.

The slightly tricky part is that at each level in the hash map, you also need to
sort each value per depth (all values at veritcal level -3, for example, need to
be sorted in ascending order). This can be done using binary search to find the
insertion index, and then `.splice(insertionIdx, 0, newValue)`. So, depth will
also need to be used as a parameter of the `dfs` call, and the hash map will
need to be an array of numbers (all elements at the same veritical level, and
all elements at the same depth).

There are a lot of parts to this one, but it's not actually that hard I think.

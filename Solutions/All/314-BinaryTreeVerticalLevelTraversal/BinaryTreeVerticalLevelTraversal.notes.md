# Notes: LC 314 Binary Tree Vertical Level Traversal

The key idea for this one is to visualize the tree columns using negative and
positive numbers, with `0` being the center. Traverse the tree using `BFS`, so
the result will be in the correct order, and store the values at each level in a
hash map.

The idea is to use `BFS` to traverse the tree. The queue will contain a tuple of
the current node and the level of that node, staring with `[root, 0]`. While the
queue has length, `shift` out the first value, and add it to hash map at the
correct level.

Then, add the left and right nodes to the stack (if they exist). The left node
will be set to level `level - 1` and the right node will be set to `level + 1`.

The result will be a hash map containing all the columns and all the values at
each column. Example `columns = {-2 : [2, 3], -1: [1], 0: [3, 5], 1: [6]}`

Sorting this is a bit tricky due to the negative numbers, so what you can do is
(inside the earlier `BFS` call from earlier) is keep track of the minimum level.
Then, if you add the absolute value of the minimum level to each level, you will
be able to use the levels as indexes in a result array.

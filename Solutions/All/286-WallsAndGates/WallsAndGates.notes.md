# Notes: LC 286 Walls And Gates

I originally wanted to use DFS for this one but this is actually a great problem
to understand when to use BFS/DFS. You need multi-start BFS in this case because
you need to count the spaces from each gate at the same time. If two gates are
not separated by an obstacle, the first DFS call on the first gate will mark
populate empty spaces with the distance to that first gate. Even cells that are
closer to the other gate.

The interesting thing about this problem is you also don't need a counter. Since
each gate starts at a value of 0, you only need to increment the next empty cell
by the value of the "starting cell".

Because of this, you don't need to actually change the "stating cell" (aka, the
cell that gets `shift`ed from the queue). You can jump right into checking the
next cells four-directionally after `shift`ing.

| Time      | Space     |
| --------- | --------- |
| O(n \* m) | O(n \* m) |

# Notes: LC 1765 Map Of Highest Peak

Interesting graph question. Requires multi-source `BFS` to solve, and a trick to
optimize the `BFS` performance using an alternative to `.shift()`. The question
is really misleading in my opinion, and something to know is that the initial
land doesn't matter. Only the location of the water.

The idea is to iterate through the entire grid first and perform BFS after.
While iterating, set any land node to `-1` (meaning visited) and any water node
to `0`, the height of the water. Also, **very important** add those water
positions to the `BFS` queue.

After this iteration, start the `BFS`. After `.shift()-ing` the current `row`
and `col` from the queue, you can assume the current `grid[row][col]` has
already been modified, so you can start the "directions loop". In that loop,
ignore any out of bounds value or any value that is not `-1`. Then, increase the
height by `1` plus the original "root" height.

Tips:

1. `queue.shift()` runs in `O(n)` time. It can be improved in ts by simply using
   a pointer that points to the current start of the queue. This is the pattern:

```typescript
const queue: [number, number][] = [];
let queuePointer = 0;

// ...
const [row, col] = queue[queuePointer++];
```

2. Since the land can only ever be `1`, setting visited land to `-1` ensures
   that we can modify the input in place when getting the result.

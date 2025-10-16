# Notes: LC 994 Rotting Oranges

This one requires "Multi-start BFS". Like a lot of similar graph problems, the
idea is to iterate through all of the cells in the grid. When a rotten orange is
reached, add it's coords to a "rotten orange coords queue". Also, (important!),
keep a counter of fresh oranges as well. Since it's possible that not all fresh
oranges can be made rotten, you need to keep track of this value.

After populating a queue of all the rotten orange coords, you get to the
Multi-start BFS portion. It's really similar to normal BFS, with one exception.
Since all rotten oranges are "rotting" at the same time, we want to have a for
loop within the normal BFS while loop to keep track of how many minutes have
elapsed. At each iteration of the `while(queue)` in the BFS, store the current
length of queue in a variable and start a for loop iteration from 0 to the
length of the "current queue". At the end of the for loop, increment `minutes`
once. This ensures that we know when each "level" of the BFS occurred.

| Time      | Space     |
| --------- | --------- |
| O(n \* m) | O(n \* m) |

# Notes: LC 213 House Robber II

Super similar to the original House Robber problem. You can actually write that
original solution as a helper function to solve this one.

The key difference is that since the houses are aligned in a circle. The thing
to realize is that this means that you cannot rob both the first and last house,
since (in the circle) they are adjacent. I thought that this would mean having
to loop the rob function back to the beginning of the array once it reaches the
end but you don't need to do that!

The idea is to calculate the max of robbing the houses skipping the first house,
and the max of robbing the houses skipping the last house. That's all you need
to do!

| Time | Space |
| ---- | ----- |
| O(n) | O(1)  |

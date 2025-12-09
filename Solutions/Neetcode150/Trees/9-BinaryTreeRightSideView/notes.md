# Solution

I would previously always solve this problem by storing the values of every node
in the tree level by level. But, I learned that if you call the `dfs`
recursively on itself, if you start on the right side instead of the left you
can guarantee the first "insert" you do into the result array will be the right
most element at that level. You just have to make sure not to overwrite it on
later invocations, by checking if the current value stored at that level is
`undefined` or not. This brings the space complexity down from O(n) to O(h).

| Time | Space |
| ---- | ----- |
| 0(n) | 0(h)  |

# Notes: LC 2138 Divide String Into Groups Of K

Pretty simple string problem. Iterate through the string until a `group` of size
`k` is reached. Then add to the result. If the end is reached, keep adding the
`fill` character until the `k` limit is reached.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

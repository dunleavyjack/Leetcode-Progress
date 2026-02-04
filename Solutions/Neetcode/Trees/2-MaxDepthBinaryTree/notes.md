# Solution

For this one, recursion can be used to iterate through the tree. The base case
is to return `0`. Otherwise, the function can recursively call itself on both
the left and right sides. The max depth will be the maximum depth from either
side. The key is to also add `1` when calculating the max. Meaning, this node
exists so there is one new node to add to the depth.

| Time | Space |
| ---- | ----- |
| 0(n) | 0(h)  |

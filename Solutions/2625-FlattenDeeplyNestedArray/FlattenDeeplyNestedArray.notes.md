# Notes: LC 2625 Flatten Deeply Nested Array

Recursively flatten the array until n reaches 0. The trick here is to remember
`Array.isArray(potentialArray)`.

| Time | Space    |
| ---- | -------- |
| O(T) | O(T + n) |

T is total elements in the nested arrays.

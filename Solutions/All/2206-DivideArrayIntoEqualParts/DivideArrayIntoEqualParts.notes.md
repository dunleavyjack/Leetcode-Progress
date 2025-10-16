# Notes: LC 2206 Divide Array Into Equal Parts

Very straightforward one. Can use a frequency map to store the frequency of each
number in the input, then check the frequency map to ensure that all numbers
appear an even number of times. If an odd frequency is found, you can return
`false` early. Otherwise, return `true` as a default.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

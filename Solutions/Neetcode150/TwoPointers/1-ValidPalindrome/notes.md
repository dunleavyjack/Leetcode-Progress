# Solution

The key is to sanitize the input of any non-alphanumeric characters and set it
to lowercase. This can be done with a regex expression, as well as the
`toLowerCase` String method.

After that, use two pointers at either end of the sanitized input. At each
iteration, bring them closer and compare. If they are ever not the same, return
false. Return true as a default.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

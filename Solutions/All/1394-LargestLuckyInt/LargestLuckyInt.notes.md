# Notes: LC 1394 Largest Lucky Int

Use a hash-map to store the frequency of each int. Then, iterate through the
hash-map checking if an int is lucky. If that's the case, compare it with the
current largest lucky int, selecting the largest one. Return `-1` as the default
if no lucky int is found.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

# Notes: LC 2570 Merge Two 2D Arrays By Summing Values

This one can be solved with a hash map, but I solved it with two pointers
instead. This utilizes the fact that each input array is already sorted. The
idea is that each pointer starts at the first element of the input, and
whichever one is lower gets pushed to the result. In the case that they are the
same, their values get combined (as the question explains).

| Time     | Space    |
| -------- | -------- |
| O(n + m) | O(n + m) |

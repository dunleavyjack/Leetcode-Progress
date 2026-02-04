# Solution

For this one, the idea is to continually increase the right pointer. At each
iteration, check to see if the current profit is greater than then maximum
profit. Also, check to see if the value at the left pointer is ever greater than
the value at the right pointer. If that happens, set the left pointer to the
right pointer's location before incrementing.

| Time | Space |
| ---- | ----- |
| 0(n) | 0(1)  |

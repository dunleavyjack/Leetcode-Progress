# Notes: LC 1944 Number Of Visible People In Queue

Iterate through the input in reverse using a monotonically decreasing stack to
track visible points. When a current height is reached that is greater then the
last one in the decreasing stack, start a count and continue to pop the last
value from the stack until the current value is no longer greater.

The tricky part for me was to then check to see if the stack had any length, and
increment the count an additional time. This is necessary because the value in
the stack is still technically "visible" to the current value.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

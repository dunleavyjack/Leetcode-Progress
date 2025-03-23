# Notes: LC 1529 Minimum Suffix Flips

This one is tricky to understand but easy to code!

The idea is to iterate through each element of the target, and perform a flip
whenever it's not the same as the "current bulb state". This is a variable that
stores whether or not the "result" is currently all 0s or 1s.

At each iteration, compare the "current bulb state" to the current state of the
target. If it's not the same, perform a "flip" by incrementing the flip counter
and "flipping" the "current bulb state" from 0 to 1 (if it's currently at 0) or
1 to 0 (if it's currently at 1).

| Time | Space |
| ---- | ----- |
| O(n) | O(1)  |

# Notes: LC 1695 Maximum Erasure Value

I solved with a sliding window and a hash set to track the occurrence of
individual `nums` in the sub-array. The idea is to create two points (as usual
for a sliding window problem), and always add the right most element to the
`sum`.

Then, check to see if the current number already exists in the hash set. If
that's the case, then you need to move the left pointer towards the right
pointer until the duplicate number is reached. While doing so, you need to
remove the current number at the left pointer and decrease it's value from the
sum.

Otherwise, simply add the current number to the hash set. Finally, at every
iteration compare the current sum with the maximum sum and replace if necessary.
I always forget, but make sure to increment the right pointer as well to prevent
a TLE.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

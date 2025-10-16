# Solution

This one stumped me for a while for some reason, but the solution is actually
pretty intuitive. Perform a binary search like usual (three pointers: `left`,
`right`, and `middle`). Check if the middle element is the target, and return
`mid`, if that's the case.

Otherwise, the idea is that even in a rotated array, one side will still be
sorted. Check to see if the left side is sorted by checking if the value at the
`left` pointer is less than or equal to the value at the `mid` pointer. If
that's the case, then check if the `target` should exist within that left sorted
portion by checking if it's greater than or equal to the value and `left` and
less than the value at `mid`. If so, then move the right pointer inward.
Otherwise, the `target` is outside the left sorted portion, so move the left
pointer inward. Do the reverse if the right section is sorted.

Otherwise, return `-1` by default.

| Time      | Space |
| --------- | ----- |
| O( log n) | O(1)  |

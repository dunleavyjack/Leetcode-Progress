# Explanation

For this one, a modified binary search can be used to find the minimum.

The idea is to check if the right side is sorted. This means, the minimum is on
the left side, inclusive of `nums[mid]`, which could also be the minimum). So
when you bring the right pointer inward, set it to `mid` without decrementing by
`-1` as is usual for binary search.

Otherwise, the min must be on the right side! Bring the left pointer inward like
usual. Finally, return the value at the left pointer.

| Time     | Space |
| -------- | ----- |
| O(log n) | O(1)  |

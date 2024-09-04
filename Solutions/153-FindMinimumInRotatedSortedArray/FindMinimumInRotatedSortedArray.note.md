# Explanation

For this one, a modified binary search can be used to find the minimum.
You want to look out for a condition where the mid point is greater than
the right-most point. If this case is true, that means the right side
will contain the smallest value.

## Tip

There are two main differences to a normal binary search.

1. The while condition should be `left < right` and **not** `left <= right`.
2. When bringing in the right side, don't set `right` to `mid - 1`, only `mid`.

In a normal binary search, we know exactly what number to look for.
With this problem, we are instead looking for the pivot where smallest
value in the array will exist.

# Solution

This one seems way harder than it is. Basically, the principle to understand is
that to calculate the water at each point, you need to know 3 things.

1. The maximum height to the left.
2. The maximum height to the right.
3. The current height.

That's actually it! You can pre-compute 1 and 2 using something similar to the
prefix sum pattern. Use two arrays, and iterate through the input in either
direction, setting the current index to the be "the greatest number to the
left/right at this point, not including me".

Then, the "formula" is actually pretty simple. Iterate through the input again,
this time using the minimum of the max left and max rights. Subtract the current
height to find the total water, and if it's greater than 0 (meaning water can be
calculated), add to the result.

| Time | Space |
| ---- | ----- |
| 0(n) | 0(n)  |

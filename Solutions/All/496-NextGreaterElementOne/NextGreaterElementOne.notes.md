# Notes: LC 496 Next Greater Element One

Type: Monotonic stack, hash map.

This one is a lot of code, but not too hard once you realize it's a monotonic
stack problem.

First, iterate through `nums2` building a monotonic stack. The idea is this,
**always** push the current index into the stack. But, before doing that, check
if the stack has `nums2` indexes already and if the last `nums2` index points to
a number that is smaller than the current number. If so, and as long as the
above condition is true, keep popping from the stack and assigning the current
number to a result array (the result array should be filled with -1's).

At the end, we'll end up with an array containing the next greater element for
each number in `nums2`.stack

That was the "hard" part. Next, convert `nums2` into a hash map so that the keys
are the numbers from `nums2` and the values are the next greater elements from
the result array of the monotonic stack above.

Lastly, iterate through `nums1` and replace each number with the corresponding
value from the map. Then, return the result.

# Notes: LC 1864 Finding Pairs With Certain Sum

Created a hash-map to store the frequency of numbers in `nums2`, since it will
be much larger than `nums1` and does not have a fixed size. During the `add`
method, I store the value before and after the `add` is complete. This way, I
can decrement and increment the frequency of both values (since the original is
being replaced by the new value) in the `nums2` hash-map.

The `count` method is similar to Two Sum. Iterate through the `nums1` array
checking the frequency map for occurrences of the "compliment" number.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

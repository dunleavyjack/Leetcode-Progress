# Notes

A couple different ways to go about this one. I used a hash set to track unique
values. If a duplicate is reached, I know I can return true.

This requires O(n) time because you need to check all elements in the input and
also O(n) space because in a worst case scenario, the hash set will be as long
as the input.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

Other approach: If space is a requirement, you could also sort the input and use
two pointers next to each other searching for duplicate values. Since sorting
can be done in-place, this would cut the space complexity down to O(1), but the
time complexity would become O(n log n).

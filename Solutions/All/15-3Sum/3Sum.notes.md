# Notes

This problem is actually similar to Two Sum II, where the input array is sorted.
The trick is to first sort the input, and then iterate through each number in
the input. Take the current number and "fix" it, meaning you should consider it
as one of the numbers in a valid triplet. Then, to find the other two, use two
pointers similar to the Two Sum II problem.

One big difference though is that you need to find multiple triplets. To make
sure you aren't checking for duplicate triplets (for example, when the input is
`[0, 0, 0, 0]`) you need to make sure that you aren't visiting numbers that are
the same. The best way to do this is in two steps:

1. In the original iteration, make sure the current number is not the same as
   the previous. (This is the "fixed" number).
2. Once a triplet is found, don't immediately `break` from the iteration.
   Instead, increment the `left` and decrement the `right` pointers once. Then,
   start a while loop for each pointer to skip any duplicate numbers that come
   after.

Finally, return the valid triplets!

| Time   | Space |
| ------ | ----- |
| O(n^2) | O(1)  |

# Notes

For this one, the key thing to realize is that each number can belong to only
one consecutive sequence. So, the important thing is to find the start of each
sequence.

You can do this using a hash set of all the numbers from the input. Iterate
through that set looking for any numbers that do not have a number 1 less than
itself in the set. This means that number is the start of a consecutive
sequence! When the start of a sequence is found, create a while loop and keep
iterating until that sequence ends. Finally, compare that current sequence
length with a tracked max sequence value.

The key thing is that even though you are using a `while` loop inside a `for`
loop, because each number can only belong to one consecutive sequence, you are
guaranteed to only visit each number once! Weird, but true.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

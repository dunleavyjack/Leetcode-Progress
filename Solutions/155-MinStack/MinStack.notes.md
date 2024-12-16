# Notes

The trick here is realize that the min stack should not be a value,
but a an array of the current minimum element at each insertion.

To do this, you need two initialize two arrays in the class,
one is the normal `stack` and the other is the `minStack`.

At each insertion, check to see if the current element is smaller
or larger than the final element in `minStack`. If it is smaller,
push that value to the `minStack` array. Otherwise, push the current
minimum value.

This makes sense because the idea is to create a "historical record"
of each minimum element at each insertion. This way, when elements
are "popped" from the end, you don't need to recompute. Only pop from
`minStack` as well.

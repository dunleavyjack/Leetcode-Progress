# Notes

This problem can be solved using dfs and an array of arrays to store the
values at each level. It's actually a pretty easy problem, if you
remember to hit the left side of the tree first, and then the right, when
calling the dfs function on itself. This is the usual way it's done so it's
a curveball or anything.

The result array works like this: an array of arrays where the index is the level
and the values at each index (the inner arrays) are all the values from the tree.
The only tricky part is checking to make sure that the level array exists
before pushing. As far as I know, there isn't a fancy approach like with a
hashmap, so just check if it exists (you can do this in TS) or see if the
level is the same as the array's length, then push an empty array.

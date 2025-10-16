# Notes

This problem can be solved with recursion without creating a new recursive function.

Basically, the idea is to use recursion to assemble the height from the bottom up.

This means that you aren't technically starting at 0 and incrementing each time you
reach a new node. Instead, you loading more calls onto the call stack until the
base case is reached at the bottom of the tree, returning 0. Then, the code in the
body of the recursive function is executed one by one back up the tree. For each
node that exists, you want to compare the height on the left and the height on the
right, adding 1 to represent the new level. Eventually, the root node will be reached,
at which point the max height can be found.

In the code it's pretty simple. In the body of the original function, first add a
base case the checks if the node exists. If not, return `0`. Then, call the function
recursively on the left and right nodes of the tree, returning the values and storing
them in a `left` and `right` variables respectively. Finally, return the max of `left`
and `right`, adding 1 to the max to represent the new level.

Tip: In recursive functions, everything after any call the function makes to itself
will be executed from the last element backwards up to the first.

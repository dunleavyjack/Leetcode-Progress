# Notes

This one can be solved using recursion (without creating a new function),
and uses the same "temp" approach as inverting a linked list.

First, write a base case that checks if the input node even exists. Return `null`
if does not.

Then, flip the left and right nodes. Use a `temp` variable (just like with the
flipping nodes in a linked list) to store the value of one node (left or right),
assign that node to the opposite node, and that opposite node to the `temp` variable.

Now, recursively call the base function on both the left and right nodes. Finally,
return the `root` of the tree.

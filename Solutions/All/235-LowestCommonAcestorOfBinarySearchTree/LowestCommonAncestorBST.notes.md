# Notes

This one is easier than it seems. The idea is to exploit the fact that for any
given node in a BST, the node to the right will always be greater and the node
to the left will always be less.

The idea is to chase down both `p` and `q`, using the original function to perform
the recursive call. If the both `p` and `q` are greater than the root val, then
they must be on the right side of the node. Call the function recursively on that
side. If they are both less than the root node, call the function recursively one
the left. If neither case is true, then you've reached the lowest common ancestor.

# Notes

This one can be solved using recursive dfs, using the original function to solve
the problem.

As a base case, check if both p and q do not exist. If this is the case, return
true. Then, check to see if **either** node or node doesn't exist, in addition
to whether or not the values of those nodes are not the same. Return false if
that is the case.

Call the function recursively on the left and right nodes from the root, and
return the combination of what is returned from both calls.

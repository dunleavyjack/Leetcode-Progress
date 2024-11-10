# Notes

This function requires using a helper function which is actually the solution
to another leetcode problem, LC100 Same Tree. You actually should write the solution
to that problem, `isSameTree`, first.

The idea is to traverse the root, checking to see if the current `val` is the same
as the root `val` of the `subRoot`. If that occurs, check to see if the current node
and the `subRoot` are the same using the `isSameTree` helper function. If they are,
then return `true`. Otherwise, recursively check the left and right nodes of the
root using the original function.

**Note** There's one kind of tricky base case here. If the `subRoot` is null,
that means that it **IS** technically a subtree, as long as the root
exists. This might be obvious, since all trees will eventually include `null`,
but it confused me at first.

# Notes

One of the keys to this problem is that the max diameter might not be
found at the root. This means that a "global" variable will need to be
created, and when a potential diameter is found it must be compared against
the global value. Since the variable needs to be "global", this also means
that the recursive function that does the brunt of the work cannot be the
primary function.

For the solution, the actual recursive function is very similar to the "max
depth of binary tree" problem. Except, this function should also compute the
diameter (easier than it sounds, just the max depth of the left + right), and
compare it to the max diameter global value.

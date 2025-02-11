# Solution

One thing to know before starting this one is that the 0(1) time complexity
expected, for some reason, **does not consider the result array as extra
space**. It's good to notice that, because I almost always try to solve this one
by modifying nums directly (which won't work).

This is like the original prefix/postfix array problem. Create a value called
`prefix` that is set to `1` and iterate through the input. At each iteration,
set the corresponding index in the result array to the current prefix, and then
multiple the prefix by the current number from nums. Then, do the same thing in
the opposite direction.

Tip: When going backwards, be care to multiple the initial iteration by the
`postfix` instead of directly setting it (as in the first iteration). This way,
the last value in the result is not hardcoded as `1`.

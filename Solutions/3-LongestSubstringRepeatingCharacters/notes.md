# Notes

Use a set to store unique chars and sliding window to iterate though the string.
For each iteration, keep always aim to add the right value. But first, check to
see if that value already exists in the set. If it does, keep incrementing the
left pointer and removing the value at that pointer from the set. Once you can
add that right value, do a `Math.max` to see if the set's size is now larger than
the current max.

> [!TIP]
> With this approach, you never need to decrease the left pointer.

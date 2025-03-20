# Notes

A sliding window problem.

This one is slightly unintuitive: you need to consider the "worst" case (that
the first element is already in the substring) first, but it's still pretty
simple.

The idea is to create two pointer, `left` and `right`. Both are set to 0.
Iterate through the input until the `right` pointer reaches the end. At each
iteration, if the current `right` element exists, start a while loop to keep
removing the `left` elements until the current `right` element is unique.
Basically, you want to keep removing elements from the left side until the
duplicate element is removed. This starts a new, unique substring.

Then, you can safely add the right element to the set. At this point, you can
also compare the current unique elements size with the maximum. Finally,
increment the right pointer to the next char.

At the end, return the maximum length.

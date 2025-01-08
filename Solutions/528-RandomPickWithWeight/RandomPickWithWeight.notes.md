# Notes: LC 528 Random Pick With Weight

This is a tricky one. The solution required prefix sum and binary search.

The idea is to store the input numbers in a prefix sum array, so that their
weight is cumulative. Then, generate a random number inclusive of the max from
the prefix sum array and use binary search to find the first index that is equal
to or greater than that random number.

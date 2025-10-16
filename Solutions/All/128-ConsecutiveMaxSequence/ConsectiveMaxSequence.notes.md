# Explanation

This one is slightly intuitive. The idea is to create a set of all unique
numbers in the input. This does two things:

1. The set allows for 0(1) lookup retrieval
2. Only having unique numbers reduces the amount of iterations you will have to
   do later on

After creating a set, **and this important** iterate through the elements of
**the set**. Don't know why, but I always forget this and get a TLE on the last
two test cases when submitting.

The idea is to ignore any numbers that are part of a sequence already. You can
tell this right away by checking if `currNum - 1` exists in the set. If it does,
you can save time by skipping this number. You only want to check numbers that
are the beginning of a sequence, even if that sequence is only `1`.

Once you find the beginning of a sequence, use a `while` loop to keep checking
if `num + 1` continually exists. Keep a count of how long the sequence is, and
then compare it with a max. Eventually, return the result!

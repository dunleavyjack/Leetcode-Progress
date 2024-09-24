# Notes

The most important part of this problem is that the numbers in each
list are stored in reverse order. This seems useless at first, but
it actually makes the problem a lot easier to work with.

The basic idea is to iterate through `l1` and `l2` at the same time,
adding both values together (or `0` if that list is completed) along
with a variable `carryOver` that represents anything carried over from
the previous two nodes. If that sum is greater than 10, then anything
in the 10s place will be carried over to the next calculation, and
anything in the ones place, `sum % 10`, will become the new node in the list.

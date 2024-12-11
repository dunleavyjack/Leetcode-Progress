# Notes

The key here is to realize that with sorted data, if you have two pointers at
both ends of an array, the sum of those two numbers can be increased by
incrementing the left pointer and decreased by decrementing the right pointer.

The idea is to follow this pattern and put one pointer at beginning and the other
at the end of the input array. If they sum to target return them. If not, check
to see if the sum is less than or greater than the target. If the sum is less than
the target, increment the left pointer. Otherwise, make the sum smaller by decrementing
the right.

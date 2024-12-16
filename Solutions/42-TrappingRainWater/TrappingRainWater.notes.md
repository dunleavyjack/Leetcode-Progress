# Notes

The easiest way to solve this problem is to use 0(n) space and follow the
prefix/postfix array pattern.

The idea is that at each index, you need to know the max element to the left
as well as the max element to the right. You can find this by doing one iteration
of through the input and creating a prefix array that contains the max value for
each index. Then, you can do the same thing backwards to compute the suffix array.

Then, you can iterate through the array again. At each element, using the current
index will tell you the max to the left and to the right. Take the minimum, subtract
the current height, and add it to the result. At the end, return that result value.

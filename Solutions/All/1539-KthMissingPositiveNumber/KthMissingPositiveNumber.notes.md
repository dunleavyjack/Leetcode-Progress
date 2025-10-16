# Notes: LC 1539 Kth Missing Positive Number

The idea is to iterate through numerical order, starting with 1, and keeping
a separate pointer referencing the current index of the input array. Whenever
the current number in numerical order is not equal to the value from the array,
add it to a missing numbers array. Once that array reaches k size, return the
value located at it's kth index.

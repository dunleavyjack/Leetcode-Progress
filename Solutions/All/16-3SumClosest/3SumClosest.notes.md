# Notes: LC 16 3Sum Closest

Almost the same as the actual 3Sum problem. Sort the input and iterate through
it. At each iteration, assume the current number has to be in the solution and
perform 2Sum II (two pointers on sorted numbers, where increasing the left
pointer makes the sum larger and decreasing the right pointer makes the sum
smaller) on the remaining input.

The tricky part I encountered was actually tracking the minimum difference. Best
approach I found was having two variables, one for the closest sum and one for
the smallest distance. Whenever a smaller difference is encountered, update the
closest sum as well.

| Time   | Space |
| ------ | ----- |
| 0(n^2) | 0(1)  |

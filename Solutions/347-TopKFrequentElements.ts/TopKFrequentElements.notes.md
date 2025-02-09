# Solution

This one can be solved by using bucket sort, which sorts the numbers by their
frequency of occurrence. The idea is that a number can never occur more than n
times in an array of length n.

Once they are sorted in this way, you can iterate through the array backwards
until reaching a result of k length.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

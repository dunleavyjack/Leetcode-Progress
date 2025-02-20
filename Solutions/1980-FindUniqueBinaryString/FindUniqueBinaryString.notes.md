# Notes: LC 1980 Find Unique Binary String

This was the daily question for 2/19/25. Solution is based on
[Cantors Diagonal Argument](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument),
which is a whole thing, but the idea is that if you use the "flipped" value of
each number at each position, (flip the first index of the first number, the
second index of the second number, etc) you will end up with a new number. Since
each value will have been flipped one time, you are guaranteed to get an
original number.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

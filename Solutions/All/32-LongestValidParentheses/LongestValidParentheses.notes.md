# Notes: LC 32 Longest Valid Parentheses

This one requires a stack and an additional array. The idea is reposition the
problem: using an additional array, set the positions of each valid pair `1` and
then calculate the longest continuous sub-array of `1`s.

To do this, maintain a stack of each position of an open parenthesis. First,
push to the stack each position of an open parenthesis. If a closed parenthesis
is reached, pop from the stack and set both the current closed parenthesis and
the position of the closed parenthesis to `1` in the array.

Then, all you have to do is find the longest substring of `1`s in the array. The
result is your answer!

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

# Solution

This problem boils down to the same principle as Two Sum 2. The idea is that you
can find triplets by "fixing" the first number (essentially, saying "what if we
wanted to find a pair of numbers that sum to the target - the current number").

The tricky part of this one is avoiding duplicates. This means there are a few
while loops to be mindful of.

| Time     | Space |
| -------- | ----- |
| 0(O ^ 2) | 0(1)  |

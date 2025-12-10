# Solution

The idea with this one is to use a combination of a set and a sliding window to
keep track of unique characters while traversing the input. Always move the
right pointer forward. If a reaches a character that has already been visited,
then you need to keep moving the left pointer forward (while deleting each
character it passes), until it reaches one past the duplicate character.

| Time | Space |
| ---- | ----- |
| 0(n) | 0(n)  |

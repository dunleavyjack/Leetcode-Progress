# Notes

Use a set to store unique/visited numbers from the array. If a number already
exists in the set, then there is a duplicate.

Time Complexity: 0(n) Space Complexity: O(n)

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

Additionally, you can solve this using constant space by sorting the initial
input, and then checking for duplicates by looking for two numbers that are next
to each other that are the same. Since sorting is involved, the space complexity
is worse: O(n log n), but the space is O(1).

| Time       | Space |
| ---------- | ----- |
| O(n log n) | O(1)  |

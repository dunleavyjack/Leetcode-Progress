# Solution

Iterate through each `num` in `nums` adding each `num` to a hashmap along with
it's index. Before adding the num to the hashmap, check if that number's
compliment (the `num` required to reach the target), is already in the hashmap.
If that is the case, return the index of both nums.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

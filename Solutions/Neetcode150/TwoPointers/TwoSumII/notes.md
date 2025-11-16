# Solution

Since the input array is sorted, if you have two pointers, one on either end,
the idea to realize is that if you move the left pointer forward, the sum of
both numbers will increase. If you move th right pointer inward, the sum of both
numbers will decrease.

| Time | Space |
| ---- | ----- |
| O(n) | O(1)  |

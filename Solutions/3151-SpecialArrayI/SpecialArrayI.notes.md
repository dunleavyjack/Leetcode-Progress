# Notes: LC 3151 Special Array I

Pretty simple one. The only thing to "get" is that:

1. The sum of two even numbers will always be even.
2. The sum of two odd numbers will also always be even.
3. The sum of an odd and even number will always be odd.

With this in mind, all you need to do it iterate through all the pairs in the
array, checking if the sum of the two is odd or even.

| Time | Space |
| ---- | ----- |
| O(n) | O(1)  |

# Notes: LC 560 Sub Array Sum Equals K

Really interesting one! My intuition was to use a sliding window to track the
sub arrays, but I learned that the presence of negative numbers in the input
rules out sliding window (the sum of the elements within the window will not
longer always grow/shrink when the pointers are shifted accordingly).

Instead, the idea is use a single pass, prefix sum, and hash map that is
actually similar to LC1 Two Sum.

While iterating through the input, compute the prefix sum at the current
element. Then, check to see if that sum's "compliment" (same as TwoSum, the sum
required to reach `k`, exists in the hash map already). If not, add the current
prefix sum to the map. Now, this is important: since negative numbers can be
reached as well as 0, you need to count the frequency of these occurrences.

For example if `k = 2` and the input is `[1, 2, 0]`, then there are two sub
arrays that can sum to 2. Counting the occurrence helps you avoid messing this
up.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |

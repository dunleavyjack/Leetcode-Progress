# Notes: LC 2559 Count Vowel Strings In Ranges

Actually a pretty standard prefix-sum problem. The idea is to pre-compute the
amount of words in the input that start and end with a vowel, using a single
prefix sum array to store the result. Then, each query can be computed without
having to rescan the entire array.

The key here is to remember two things: that prefix sum arrays always start with
an extra 0 (meaning, their length will always be `input.length + 1`), and that
to get values from a prefix sum array the formula is always
`prefixSumArr[right + 1] - prefixSumArr[left]`.

| Time      | Space     |
| --------- | --------- |
| O(n \* m) | O(n \* m) |

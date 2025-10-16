# Solution

This one can be solved with a hash map along with bucket sort.

The idea is to iterate through each of the words in the input and sort the
frequency of their characters using bucket sort, which in this case is an array
of length 26 where each index in the array represents the "order" of that letter
in the alphabet. The value at each index in the array represents the frequency
of that letter.

After sorting each word, that bucket should be string-ified and added to a hash
map. This way, other words with the same frequency can be grouped together.

Finally, combine the result into an array (or simply create a new array with the
values from the map) and return it!

| Time | Space     |
| ---- | --------- |
| O(n) | O(n \* m) |

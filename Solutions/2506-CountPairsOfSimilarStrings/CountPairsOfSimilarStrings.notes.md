# Notes: LC 2506 Count Pairs Of Similar Strings

For this question, the solution can be reached using the bucket sort method of
sorting words by the frequency of their chars. Although the actual frequency
doesn't matter. You only need to care if a char actually exists or not.

For each word, create a "bucket" to store the occurrence of characters in.
If a letter exists at least once, add 1. Otherwise, ignore it. Finally,
use the `join("")` method to condense the array into a string that can be
used as a key in a hash map. For other words, increment the number associated
with the value for that key, or add a new key / value pair. Lastly, iterate
through the values of the hash map and count pairs. This can be done with the
following equation:

```typescript
const pairs = (freq * (freq - 1)) / 2;
```

Increment the overall number of pairs and return that as the result.

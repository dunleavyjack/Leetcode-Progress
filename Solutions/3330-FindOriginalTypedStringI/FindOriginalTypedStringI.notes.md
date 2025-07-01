# Notes: LC 3330 Find Original Typed String I

The question is really asking to count the number of adjacent duplicates. Since
at least one "word" is guaranteed, the count needs to start at `1`. I did this
by, just iterating through each index in `word` starting at `1` and checking the
current and previous characters at both indexes.

| Time | Space |
| ---- | ----- |
| O(n) | O(1)  |

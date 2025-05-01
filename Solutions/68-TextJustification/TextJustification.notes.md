# Notes: LC 68 Text Justification

This one is a simple seeming greedy problem, but there are some annoying
requirements. I think the biggest trick is how to handle the case where a new
word exceeds the `maxWidth` limit. Once you complete the current line, you are
still left with that extra word! At first, I tried to handle it on the spot, but
you risk adding a word that is the same length as `maxWidth`, and not handling
it properly. Instead, you can simply not iterate `i`! This way, that word will
be handled "fresh" on the next iteration.

Other notes:

- There is a possibility of dividing by 0 here, so you can do `x / (y - 1 || 1)`
  as a safety.

| Time             | Space            |
| ---------------- | ---------------- |
| O(n \* maxWidth) | O(n \* maxWidth) |

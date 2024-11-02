# Notes: LC 2490 Circular Sentence

Can be done in a single pass.

1. Compare the first and last characters first.
2. Iterate through the letters of the sentence.
3. If a space is reached, compare the previous and the next char.
   Make sure neither is out of bounds, or a space, or different.

Note: When comparing chars, make sure that they are not spaces!

# Notes: LC 169 Majority Element

This one is really easy to solve using a hash map to track the frequencies of
each character, but can be optimized using the
[Boyer-Moore majority vote algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm).

That algorithm is not intuitive, but easy to remember and short to code. The
basic idea is that if a majority element exists, it's frequency will be greater
than all other numbers in the input combined.

In that algorithm, set the first value as a "candidate" for majority element and
another variable to track the occurrences. While iterating through the input, if
the next number is the same as the candidate you increment the count. If it is
not the same, decrement the count. Whenever the count reaches `0`, replace the
candidate with the current number. You'll also need to increment the count to
one.

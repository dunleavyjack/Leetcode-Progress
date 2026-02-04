# Notes

Since an anagram means a word whose letters can be arranged to form another
word, what we are looking for in this problem is if the two inputs have the same
frequency of characters.

I achieved this using two separate hash maps. One for the frequency of
characters in each input. The, I iterate through one of the inputs to ensure
that the occurrence of each character matches up with the other map.

One main point that's easy to miss: you need to make sure that both inputs have
the same length. Otherwise, the frequency maps will be irrelevant.

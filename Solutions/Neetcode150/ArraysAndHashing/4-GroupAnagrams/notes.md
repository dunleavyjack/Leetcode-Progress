# Notes

Since an anagram is a word whose letters can be rearranged to form another word,
you will need to count the frequency of characters for each number. The trick
for this problem is to realize how to store them "grouped" in a hash map. This
can be achieved by using a combination of two things. First, using a "bucket
sort" approach to store the frequency of characters in an array. Each index in
the bucket array represents a letter. 0 = "a", 1 = "b", etc. At each index, the
value stored represents the frequency of that character in each word.

Then, you can use the `.toString()` method to convert the bucket array into a
string. It can then be used as the key in a hash map, and the original word can
be stored as part of array of all other words that have the same frequency of
characters.

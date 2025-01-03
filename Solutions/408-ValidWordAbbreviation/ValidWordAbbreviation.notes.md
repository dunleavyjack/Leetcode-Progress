# Notes: LC 408 Valid Word Abbreviation

This one is actually really annoying. The idea is simple (just two pointers, and
then a third pointer to count abbreviated numbers with multiple digits), but
there are a lot of tricky edge cases.

Anyway, as mentioned above the idea to to use two pointers (one for the original
word and one for the abbreviated word). While the word pointer is less than the
length of the word, check to see if it matches the current character from the
abbreviation.

If not, then check if the character from the abbreviation is a number. This can
be done by checking the `charCode` of the character (if it is between the
`charCode` of "1" and "9"), or using the following pattern:
`const isStringifiedNumber = !isNaN(Number(char))`. The trick here is casting a
non number to a number will result in `NaN`, so the built in `isNaN` function is
useful.

Use a while loop to check how long the abbreviation number is, using a third
pointer to track the length and a new variable to store the number. When it
terminates, increment the word pointer by the value of the number and the
abbreviation pointer by the length of the number. Then, continue.

At the end, make sure both pointers reached the end of their words without
exceeding.

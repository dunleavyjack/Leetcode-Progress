# Notes: LC 75 Sort Colors

Bucket sort! Although this one seems like a normal sort problem, since there are
only 3 possible numbers (0, 1, 2), it can actually be solved in a much simpler
way. Create an array to serve as the bucket of length `3`. Count the frequencies
of each of the 3 numbers and assign them to the bucket, using the index of the
bucket to represent the number you are counting.

Finally, and this is the surprisingly tricky part, iterate through the bucket
and reassign the original input (there is no `return` in this problem, as the
result needs to be modified in place) to numbers from the bucket.

This part isn't actually too hard, but it's a little weird to remember that the
bucket's indexes are actually the numbers and not the frequencies. Maybe that
was just my bad today. Anyway, whenever you preform a reassign always decrement
the frequency in the bucket (the bucket now serves as a "how many more numbers
do we have to reassign").

One dumb thing that tripped me up today: sometimes the input does not always
contain all three numbers. Plan to increment the `bucket` using a while loop
instead.

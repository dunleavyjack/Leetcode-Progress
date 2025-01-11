# Notes: LC 27 Remove Element

This one is not a tricky concept but was actually a little annoying to code up.
The basic idea is to iterate through the input numbers and when a "number to
remove" is reached, swap it to the end of the array. This means that you'll need
a pointer that points to the last **non target** element. Whenever the forward
iteration meets the end pointer, return `end + 1` to account for the 0th index
in the array.

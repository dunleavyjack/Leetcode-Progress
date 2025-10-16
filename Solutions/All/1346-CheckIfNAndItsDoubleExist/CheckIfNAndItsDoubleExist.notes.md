# Notes: LC 1346 Check If N And Its Double Exist

This is a simpler variation of Two Sum, as you only need to keep track of the compliment,
and not the index.

Traverse through the input array and check to see if the compliment, which in this
case will be the number both multiplied and divided by 2, already exists there.
If it does, simply return `true`. Otherwise, return `false`.

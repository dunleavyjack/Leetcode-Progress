# Solution

For this one, the idea is to first group each position and speed using a hash
map. Luckily, the problem states that each position is unique, so a normal
`Map<number, number>` will do.

Then, you want to sort the position array in _descending_ order. This gives you
an array starting with the position that is closest to the target. What you do
then, is iterate through this list calculating the amount of time it will take
each car to reach the target.

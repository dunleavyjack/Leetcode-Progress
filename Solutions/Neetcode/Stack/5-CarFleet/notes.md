# Solution

For this one, the idea is to first group each position and speed using a hash
map. Luckily, the problem states that each position is unique, so a normal
`Map<number, number>` will do.

Then, you want to sort the position array in _descending_ order. This gives you
an array starting with the position that is closest to the target. What you do
then, is iterate through this list calculating the amount of time it will take
each car to reach the target. Then, check the stack. You want to add a new fleet
if two conditions are true:

1. The stack is empty (meaning no other cars are traveling, and such there are
   no fleets to join)
2. The current cars "time to arrive" is greater than the last value in the
   stack. Meaning, it will arrive after the previous car. Since the faster car
   cannot be joined, a new fleet needs to be created.

| Time       | Space |
| ---------- | ----- |
| 0(n log n) | 0(n)  |

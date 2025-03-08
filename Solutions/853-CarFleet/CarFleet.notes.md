# Solution

Once you understand that this is a stack problem it's not too bad, but for me at
least it takes a while to come up with the correct approach. The basic idea is
to sort the cars based on their position from the target, in descending order
(farthest car from the target is first). Then, you iterate through the sorted
car positions and calculate the time each car will take to reach the target. The
formula for this is:

```typescript
const timeToReachTarget = (target - position) / speed;
```

The idea then is to check the current stack. If current time to reach the target
is greater than the last value in the stack (or, the stack is empty), then the
car is going slower than the fastest car before it, and will not intersect with
another fleet. This means that this car is starting a new fleet.

At the end, you can return the length of the stack, which will contain the total
number of car fleets.

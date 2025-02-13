# Notes

This problem is poorly worded. You don't need to think about water at all. You
are looking for the max area (length x height) between any two points. The
length is the distance between the two values in the input array and the height
is the min height between the two points.

Put a pointer at start and another at the end of the input array. The idea is to
calculate the area at each iteration and compare with the max you have stored.
Then, and here is the trick, move the smallest pointer inward.

| Time | Space |
| ---- | ----- |
| O(n) | O(1)  |

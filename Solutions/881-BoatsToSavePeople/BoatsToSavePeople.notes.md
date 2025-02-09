# Notes: LC 881 Boats To Save People

| Time       | Space |
| ---------- | ----- |
| O(n log n) | O(1)  |

Started by sorting the input. I tried bubble and quick sort but both exceeded
the time limit. Went with JS's built-in sort, in a pinch, instead. Once the
input was sorted, used two pointers (one at the start and end) to calculate the
necessary boats. The key to realize is that the problem mentions that all people
will be able to get on a boat, so that means no person's weight will exceed the
limit. So, if `sum` is the sum of the values at the left and right pointer,
three possibilities can occur:

1. The sum is greater than the limit. In this case (again, since no one person's
   weight can exceed the limit) only one person can ride on the boat, so the
   total boat count will increase. We will pick the heaviest person to get them
   out of the way, and decrement the right pointer.

2. The sum is equal to the limit. The sum is equal to the limit. Here, we found
   a perfect boat! Increment the total boat count and increment/decrement the
   left and right pointers respectively.

3. The sum is less than the limit. In this case, we have actually also found a
   perfect boat! Since we are comparing the two lightest and heaviest current
   people, the current `sum` is the largest left in the array, so it is safe to
   pair them together. This condition can actually be combined with the `===`
   condition above, since they are handled the same way.

**Important edge case**: I added a safety case if/when the left and right
pointers meet to prevent checking `sum = input[left] + input[right]` on the same
point. If they meet, there is an odd numbered input and the final boat has been
found, so increment the boat counter and break out to return the result.

# Notes: LC 2231 Largest Number After Digit Swaps By Parity

There's probably a better solution for this one, but I got a decent one using a
pretty intuitive approach. First, use two different arrays to store the even and
odd numbers. Then, sort those arrays in increasing order.

Finally, iterate through the number again and for each even or odd number,
replace it with the current largest number from the correct array.

Number-ify the result and return it!

| Time       | Space |
| ---------- | ----- |
| O(n log n) | O(n)  |

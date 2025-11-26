# Notes

For this one, a monotonic, decreasing stack can be used to use to store visited
temperatures. The idea is, every temperature gets added to the stack, meaning
"no warmer day has been reached", since at that point it's impossible to know
what temperatures are next.

But, you do know the temperatures have been visited using the stack. Again,
meaning "no warmer day has been visited". You can compare the current number to
the last one in the stack. If the current is greater, then you've found a warmer
day for that stored temperature! Pop it and store the difference between it's
index and the current index in the result, meaning "this is how many days until
a warmer temperature".

Repeat this until the above is no longer true!

Note: It's actually easier to just store the index of the temperatures in the
stack, since the indexes can be used to find the temperature from the input.

| Time | Space |
| ---- | ----- |
| 0(n) | 0(n)  |

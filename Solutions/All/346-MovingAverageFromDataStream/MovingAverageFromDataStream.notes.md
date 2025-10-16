# Notes: LC 346 Moving Average From Data Stream

The idea is to use a queue to store the incoming numbers, inclusive of the
window size. The trick is to also store the sum of numbers in the queue as a
separate value, so you don't need to iterate through the window each time to
calculate the sum.

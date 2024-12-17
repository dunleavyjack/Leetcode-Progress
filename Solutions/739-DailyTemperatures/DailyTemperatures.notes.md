# Notes

This problem uses a stack, with a slight trick. The idea is to iterate through
each temperature in the input. Eventually, you will always add the index of the
number to the stack, but before that, check to see if the current temperature is
warmer than the last value in the stack. If that is the case, then you can pop
the last value from the stack, which will be in the index of the colder day. The
amount of days from that colder day to the current day will be the current index
minus that popped index. This will need to be repeated as long as the stack
contains a length and the temperature at the index stored there is colder than
the current.

Tips:

- Make sure to pre-fill the answer array with 0's, which is the default if no
  warmer day can be found.

- The stack you build is "monotonic", which means it is sorted (accidentally) in
  decreasing order.

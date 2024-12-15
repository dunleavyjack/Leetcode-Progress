# Notes: LC 13 Roman To Int

For this one, use a read only object to convert the symbols into their
value.

The idea is to iterate through the string backwards, adding the value
of the current symbol to a variable storing the total result. When one,
of the "special subtraction" symbols is reached, check the symbol behind it.
If it corresponds to one of those mentioned in the problem description, then
subtract.

So, for "IV"

1. `V` would be visited first and added to the result value, which is not 5.
2. `I` would be reached next. By checking the previous value, which we can find
   to be `V` means that subtractions should occur, we can subtract the value of
   `I` from the total.

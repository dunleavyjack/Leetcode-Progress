# Notes

Use a variable to keep track of the original input. Then, sort it in place.
Using a hash-map, iterate through the sorted input and add the ranks to the map.
If the number matches the previous number, skip it (it's rank will be the same).

Then, iterate through the copy of the original input and replace the value at each
index with it's rank (using the hash-map). This can be done in place. Finally, return
the original array.

# Notes

I used a hash map to store every visited number and it's index. Before storing a
new number, I check to see if the "compliment" (the number that will sum with
the current number to reach the target) is already in the hash map. If that's
the case, I return the indexes of both. Otherwise, `[-1, -1]`.

For this one, the main trick is to know how to sort a frequency hash map. This
can be done by creating a new "bucket" array. Each bucket starts as an empty
array, and it's index represents the frequency of the numbers in the bucket. The
length of the entire bucket array is the same as the original input, since a
number can't occur more times than `n`, where `n` is the length of the input.

For example:

If the input is `[1, 1, 5]`, then the frequency map will look like this:

```
Map(2) { 1 => 2, 5 => 1 } // 1 occurs twice, 5 occurs once
```

Then, to bucket sort you create an empty array of arrays:

```
[
  [], // 0 occurences
  [], // 1 occurence
  [], // 2 occurences
  []  // 3 occurences
]
```

Iterating through the map, you can populate the bucket sort array:

```
[
  [], // 0 occurences
  [5], // 1 occurence
  [1], // 2 occurences
  []  // 3 occurences
]
```

Now, if you iterate through the bucket array backwards, you will get the
elements in the decreasing order of their frequency!

function sortColors(nums: number[]): void {
  // Create an empty bucket (of length 3, since there are only 0, 1, and 2 in this array)
  const bucket = new Array(3).fill(0); // [num0s, num1s, num2s]

  // Iterate through the numbers in the input and count their frequencies in the bucket
  for (const num of nums) {
    bucket[num]++;
  }

  // Itereate through each number in the input as assign it to number from the bucket
  // Once a bucket is empty, move to the next **non empty** bucket.
  let currNum = 0;
  for (let i = 0; i < nums.length; i++) {
    while (bucket[currNum] === 0) {
      currNum++;
    }

    nums[i] = currNum;
    bucket[currNum]--;
  }
}

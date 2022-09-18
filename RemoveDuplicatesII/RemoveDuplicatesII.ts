type HashMap = {
  [key: string]: number
}

const removeDuplicates = (nums: number[]): number[] => {
  let frequencyCounter: HashMap = {};

  for (let num of nums) {
    frequencyCounter[num]
      ? (frequencyCounter[num] += 1)
      : (frequencyCounter[num] = 1)
  }

  let i = 0;
  while (i < nums.length) {
    let frequency = frequencyCounter[nums[i]]
    console.log("START:", i, nums[i], frequency)
    console.log(nums);
    if (frequency === 1) i++
    if (frequency === 2) i += 2
    if (frequency > 2) {
      i += 2
      nums.splice(i, frequency - 2)
    }
    console.log("End:", i, nums[i], frequency)
    console.log(nums);
  }

  return nums
}


console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));

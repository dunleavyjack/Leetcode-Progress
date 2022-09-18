type HashMap = {
  [key: string]: number
}

const removeDuplicates = (nums: number[]): number[] => {
  // Create hash map to track duplicate values
  let frequencyCounter: HashMap = {};

  // Count frequency of numbers in nums array
  for (let num of nums) {
    frequencyCounter[num]
      ? (frequencyCounter[num] += 1)
      : (frequencyCounter[num] = 1)
  }

  // While i is in bounds, check number of nums array with frequency
  let i = 0;
  while (i < nums.length) {
    let frequency = frequencyCounter[nums[i]]
    if (frequency === 1) i++ // If 1, skip one place
    if (frequency === 2) i += 2 // If 2, skip two places
    if (frequency > 2) { // If > 2, skip two places and remove the rest
      i += 2
      nums.splice(i, frequency - 2)
    }
  }

  return nums
}


console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));

function twoSum(nums: number[], target: number): number[] {
  const visitedNums = new Map<number, number>(); // { num, index }

  // Iterate through all nums
  for (let i = 0; i < nums.length; i++) {
    // The "compliment" is the number we need to sum to target
    const compliment = target - nums[i];

    // If the compliment is already stored in the map, return the current
    // index as well as the index stored in the map
    if (visitedNums.has(compliment)) {
      return [visitedNums.get(compliment)!, i];
    }

    // Otherwise, add the current number and it's index to the compliment
    visitedNums.set(nums[i], i);
  }

  // Return this if no two nums summing to the target are found
  return [-1, -1];
}

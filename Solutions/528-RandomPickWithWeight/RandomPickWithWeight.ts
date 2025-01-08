class Solution {
  weightedNums: number[] = [];

  constructor(w: number[]) {
    // Calculate the prefix sum and store it as a value in the class
    let prefixSum = 0;
    for (let i = 0; i < w.length; i++) {
      prefixSum += w[i];
      this.weightedNums[i] = prefixSum;
    }
  }

  pickIndex(): number {
    // Choose a random target number inclusive of the max value from the prefix sum
    const randomTarget = Math.floor(
      Math.random() * this.weightedNums[this.weightedNums.length - 1],
    );

    // Use binary search to find the first index that is greater than or equal to the random number
    let left = 0;
    let right = this.weightedNums.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (randomTarget >= this.weightedNums[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }
}

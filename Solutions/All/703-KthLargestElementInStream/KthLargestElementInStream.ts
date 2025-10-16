class KthLargest {
  k: number;
  kHighest: number[];
  constructor(k: number, nums: number[]) {
    this.k = k;

    // Create window of k highest elements
    this.kHighest = nums.sort((a, b) => a - b).slice(-k);
  }

  add(val: number): number {
    const insertionIndex = this.getInsertionIndex(val, this.kHighest);
    this.kHighest.splice(insertionIndex, 0, val);

    if (this.kHighest.length > this.k) {
      this.kHighest = this.kHighest.slice(1);
    }

    return this.kHighest[0];
  }

  private getInsertionIndex(val: number, nums: number[]) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (val < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

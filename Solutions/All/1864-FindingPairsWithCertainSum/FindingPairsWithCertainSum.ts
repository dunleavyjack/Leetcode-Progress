class FindSumPairs {
  nums2FreqMap = new Map<number, number>(); // { number: freq }

  constructor(
    public nums1: number[],
    public nums2: number[],
  ) {
    for (const num of nums2) {
      this.nums2FreqMap.set(num, (this.nums2FreqMap.get(num) || 0) + 1);
    }
  }

  add(index: number, val: number): void {
    const originalValue = this.nums2[index];
    const newValue = originalValue + val;
    this.nums2[index] = newValue;

    // Decrement original value
    this.nums2FreqMap.set(
      originalValue,
      this.nums2FreqMap.get(originalValue)! - 1,
    );

    // Set new one
    this.nums2FreqMap.set(newValue, (this.nums2FreqMap.get(newValue) || 0) + 1);
  }

  count(tot: number): number {
    let sum = 0;

    for (let num of this.nums1) {
      const compliment = tot - num;
      sum += this.nums2FreqMap.get(compliment) || 0;
    }

    return sum;
  }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */

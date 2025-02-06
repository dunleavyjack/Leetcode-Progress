function tupleSameProduct(nums: number[]): number {
  let productMap = new Map<number, number>(); // {product: numOfPairs }
  let amountOfTuples = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const product = nums[i] * nums[j];
      productMap.set(product, (productMap.get(product) || 0) + 1);
    }
  }

  for (const numOfPairs of productMap.values()) {
    amountOfTuples += ((numOfPairs * (numOfPairs - 1)) / 2) * 8;
  }

  return amountOfTuples;
}

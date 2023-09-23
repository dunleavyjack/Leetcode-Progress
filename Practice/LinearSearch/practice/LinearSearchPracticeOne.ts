const linearSearch = (nums: number[], target: number): number => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 5))

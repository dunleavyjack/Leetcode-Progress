function isArraySpecial(nums: number[]): boolean {
  for (let i = 1; i < nums.length; i++) {
    const firstNum = nums[i - 1];
    const secondNum = nums[i];

    if (isEven(firstNum + secondNum)) return false;
  }

  return true;
}

function isEven(num: number) {
  return num % 2 === 0;
}

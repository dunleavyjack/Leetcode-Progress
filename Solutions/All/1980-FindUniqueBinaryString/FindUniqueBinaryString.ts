function findDifferentBinaryString(nums: string[]): string {
  let result = "";

  for (let i = 0; i < nums.length; i++) {
    if (nums[i][i] === "1") result += "0";
    else result += "1";
  }

  return result;
}

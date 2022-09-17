type HashMap = {
  [key: number]: number
}


const intersection = (nums1: number[], nums2: number[]): number[] => {
  let hashOne: HashMap = {};
  let hashTwo: HashMap = {};
  let result: number[] = [];

  for (let number of nums1) {
    hashOne[number]
      ? (hashOne[number] += 1)
      : (hashOne[number] = 1);
  };

  for (let number of nums2) {
    hashTwo[number]
      ? (hashTwo[number] += 1)
      : (hashTwo[number] = 1)
  }

  for (let val in hashOne) {
    if (hashOne[val] && hashTwo[val]) result.push(Number(val));
  };

  return result;
}

console.log(intersection([4, 9, 4], [9, 4, 9, 8, 4]))

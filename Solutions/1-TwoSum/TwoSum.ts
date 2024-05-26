function twoSum(nums: number[], target: number): number[] {
	const visitedNums = new Map<number, number>(); // {num, index}
	let result: number[] = [];

	for (let i = 0; i < nums.length; i++) {
		const compliment = target - nums[i];

		if (visitedNums.has(compliment)) {
			result = [visitedNums.get(compliment)!, i];
			break;
		} else {
			visitedNums.set(nums[i], i);
		}
	}

	return result;
}

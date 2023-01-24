import { getDigit } from './getDigit';
import { mostDigits } from './mostDigits';

const radixSort = (nums: number[]): number[] => {
    let longestDigit = mostDigits(nums);

    for (let k = 0; k < longestDigit; k++) {
        let digitBuckets: any = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push[nums[i]];
        }
        nums = [].concat(...digitBuckets);
    }

    return nums;
};

console.log(radixSort([40, 200, 3, 14]));

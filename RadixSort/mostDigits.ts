import { digitCount } from './digitCount';

export const mostDigits = (nums: number[]): number => {
    let max: number = 0;

    for (let num of nums) {
        max = Math.max(digitCount(num), max);
    }

    return max;
};

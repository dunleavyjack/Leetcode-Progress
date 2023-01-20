/**
 *
 * @param num The number you want to examine
 * @param i  The position of the number you want
 *
 * Example: If you want to find second digit in this number: 7328.
 *
 * getDigit(7328, 2) ---> Returns 3.
 *
 * !Important, numbers are not like strings. 0 position is the lowest digit in the number (right side!)!!
 *
 */

export const getDigit = (num: number, i: number): number => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

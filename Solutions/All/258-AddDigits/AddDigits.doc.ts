/**
 * This function will accept a number nd continue to add it's digits together until one digit is left, and then return that digit.
 *
 * Solution Tips: Recursion. Casting num to a string, and string to array.
 *
 * @param num
 * @returns
 */
function addDigits(num: number): number {
    // Recursive Escape: If one digit is left, return that digit.
    if (String(num).length === 1) return num;
    // If not, track a value called sum, that will be the sum of each individual digit in the number
    else {
        /**
         * The sum of each individual digit in `num`
         */
        let sum = 0;

        // A little fancy here, but cast `num` to a string and split it by digit into an array.
        // Iterate through each digit (now a string) and add to the sum (converting back to a num)
        for (let n of String(num).split('')) sum += Number(n);

        // Once a new sum is found, recursively call yourself.
        return addDigits(sum);
    }
}

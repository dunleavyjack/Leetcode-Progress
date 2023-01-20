// Finds length of number by finding what power of ten gives us the number
//
// For example: digitCount(423) ---> 3
//

export const digitCount = (num: number): number => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
};

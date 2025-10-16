function largestGoodInteger(num: string): string {
    let maxDigit = -1;

    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
            maxDigit = Math.max(maxDigit, Number(num[i]));
            i += 2;
        }
    }

    return maxDigit >= 0 ? `${maxDigit}${maxDigit}${maxDigit}` : '';
}

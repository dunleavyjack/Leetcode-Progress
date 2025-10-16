function largestOddNumber(num: string): string {
    let finalOddIntIndex = -1;
    let result = '';

    for (let i = num.length - 1; i >= 0; i--) {
        if (Number(num[i]) % 2 !== 0) {
            finalOddIntIndex = i;
            break;
        }
    }

    for (let i = 0; i <= finalOddIntIndex; i++) {
        result += num[i];
    }

    return result;
}

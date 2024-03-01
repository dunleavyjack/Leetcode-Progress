function maximumOddBinaryNumber(s: string): string {
    let oneCount = 0;

    for (let char of s) if (char === '1') oneCount++;

    let postFix = '';
    if (oneCount > 0) {
        postFix = '1';
        oneCount--;
    }

    let prefix = '';
    while (prefix.length < oneCount) {
        prefix += '1';
    }

    let middle = '';
    while (middle.length < s.length - prefix.length - postFix.length) {
        middle += '0';
    }

    return prefix + middle + postFix;
}

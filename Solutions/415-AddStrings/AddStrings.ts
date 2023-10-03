function addStrings(num1: string, num2: string): string {
    // Find the longest num
    const maxLength = Math.max(num1.length, num2.length);

    for (let i = maxLength - 1; i >= 0; i--) {
        console.log(num1[i], num2[i]);
    }

    return '';
}

console.log(addStrings('123', '8234'));

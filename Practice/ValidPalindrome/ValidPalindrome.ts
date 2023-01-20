export {};

const isPalindrome = (s: string): boolean => {
    const cleanString: string = s.replace(/\W|_/g, '').toLowerCase();
    let left: number = 0;
    let right: number = s.length - 1;

    while (left <= right) {
        if (cleanString[left] !== cleanString[right]) return false;
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome('racecar'));

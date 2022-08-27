// s.replace(/\W|_/g, '')

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const cleanS = s.replace(/\W|_/g, '').toLowerCase();
    let leftPointer = 0;
    let rightPointer = cleanS.length - 1;

    while (leftPointer < rightPointer) {
        if (cleanS[leftPointer] !== cleanS[rightPointer]) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }

    return true;
};

const input = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(input));

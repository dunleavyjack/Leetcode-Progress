const input = '()';

const isValid = (s: string): boolean => {
    // Init stack
    let stack: string[] = [];

    for (let char of s) {
        // Add all left sided chars to stack. Flip them on add to make it easier.
        char === '{' && stack.unshift('}');
        char === '[' && stack.unshift(']');
        char === '(' && stack.unshift(')');

        // If left sided char matches last in stack, remove
        if (char === stack[0]) {
            stack.shift();

            // If char is right sided but doesn't match, return false
        } else if (char === '}' || char === ']' || char === ')') {
            return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid(input));

const areThereDuplicates = (...args) => {
    let counter = {};

    for (let val of args) {
        counter[val] ? (counter[val] += 1) : (counter[val] = 1);
        if (counter[val] >= 2) return true;
    }

    return false;
};

console.log(areThereDuplicates(1, 2, 4, 2));

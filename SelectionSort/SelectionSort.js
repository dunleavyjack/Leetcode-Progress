const selectionSort = (arr) => {
    // Initialize a left and right pointer
    let pointer = 0;
    let min = Infinity;

    while (pointer < arr.length) {
        if (arr[pointer] < min) {
            min = arr[pointer];
        }
        pointer++;
    }

    return min;
};

const sampleArr = [34, 21, 44, 56, 79, 2];

console.log(selectionSort(sampleArr));

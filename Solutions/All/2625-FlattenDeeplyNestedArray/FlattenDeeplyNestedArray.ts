type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number,
): MultiDimensionalArray {
  // Base case: if is 0, then no more flattening can occur. Return the result of the array.
  if (n === 0) return arr;

  let result: MultiDimensionalArray = [];

  for (const el of arr) {
    if (Array.isArray(el)) {
      if (n > 1) {
        result.push(...flat(el, n - 1));
      } else {
        result.push(...el);
      }
    } else {
      result.push(el);
    }
  }

  return result;
};

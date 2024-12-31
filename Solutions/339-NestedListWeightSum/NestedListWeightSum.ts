/**
 * Definition of a nested integer from leetcode.
 */
type NestedInteger = {
  getInteger: () => number;
  getList: () => NestedInteger[];
  isInteger: () => boolean;
};

function depthSum(nestedList: NestedInteger[]): number {
  // Create a value to store the result
  let sum = 0;

  function dfs(list: NestedInteger[], level: number) {
    // Base case: list is empty, return out of the dfs.
    if (!list.length) return;

    // Iterate through each value in the list
    for (let value of list) {
      // If the value is an integer, add the product of it's value and level to the total sum
      if (value.isInteger()) {
        sum += value.getInteger() * level;

        // Otherwise, call dfs recursively on the list array
      } else {
        dfs(value.getList(), level + 1);
      }
    }
  }

  dfs(nestedList, 1);

  return sum;
}

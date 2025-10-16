import { TreeNode } from "../../../Types";

export function verticalTraversal(root: TreeNode | null): number[][] {
  const levelMap = new Map<number, number[][]>(); // {level, [ [...rootValsDepthOne], [...rootValsDepthTwo] ]}
  let minLevel = 0;

  function dfs(root: TreeNode | null, level: number, depth: number) {
    if (!root) return;

    const levelVals = levelMap.get(level) || [];
    const depthVals = levelVals[depth] || [];

    const sortedDepthVals = insertAndSortNums(depthVals, root.val);
    levelVals[depth] = sortedDepthVals;
    levelMap.set(level, levelVals);

    minLevel = Math.min(minLevel, level);

    dfs(root.left, level - 1, depth + 1);
    dfs(root.right, level + 1, depth + 1);
  }

  dfs(root, 0, 0);

  const result: number[][] = [];

  for (const [level, levelVals] of levelMap) {
    let verticalOrder: number[] = [];

    for (const val of levelVals) {
      if (val === undefined) continue;
      verticalOrder = [...verticalOrder, ...val];
    }

    result[level + Math.abs(minLevel)] = verticalOrder;
  }

  return result;
}

function findInsertionIndex(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target <= nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function insertAndSortNums(nums: number[], target: number) {
  const insertionIndex = findInsertionIndex(nums, target);
  nums.splice(insertionIndex, 0, target);

  return nums;
}

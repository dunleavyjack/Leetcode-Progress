import { TreeNode } from "../../../types";

function isEvenOddTree(root: TreeNode | null): boolean {
  const levelMap = new Map<number, number[]>(); // {level, numsAtLevel};

  function traverse(node: TreeNode | null, level: number) {
    if (!node) return;
    levelMap.set(level, [...(levelMap.get(level) || []), node.val]);

    node.left && traverse(node.left, level + 1);
    node.right && traverse(node.right, level + 1);
  }

  traverse(root, 0);

  if (levelMap.size === 1) return levelMap.get(0)![0] % 2 !== 0;

  console.log("here");

  for (const [level, nums] of levelMap) {
    // Even Row
    if (level % 2 === 0) {
      if (nums[0] % 2 === 0) return false;
      for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1] || nums[i] % 2 === 0) return false;
      }

      // Odd Row
    } else {
      if (nums[0] % 2 !== 0) return false;
      for (let i = 1; i < nums.length; i++) {
        if (nums[i] >= nums[i - 1] || nums[i] % 2 !== 0) return false;
      }
    }
  }

  return true;
}

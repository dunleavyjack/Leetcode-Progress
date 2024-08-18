import { TreeNode } from "../../Types/TreeNode/TreeNode";

function deepestLeavesSum(root: TreeNode | null): number {
  const levels = new Map<number, number[]>();
  let height = 0;

  function traverse(node: TreeNode | null, level: number) {
    if (!node) return;

    height = Math.max(level, height);
    levels.set(level, [...(levels.get(level) || []), node.val]);
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 1);

  return levels.get(height)
    ? levels.get(height).reduce((acc, num) => acc + num)
    : 0;
}

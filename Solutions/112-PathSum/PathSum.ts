import { TreeNode } from "../../Types";

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  const isLeaf = !root.left && !root.right;
  if (isLeaf && root.val === targetSum) return true;

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}

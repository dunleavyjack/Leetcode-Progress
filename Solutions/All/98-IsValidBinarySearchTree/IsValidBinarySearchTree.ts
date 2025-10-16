import { TreeNode } from "../../../Types";

export function isValidBST(root: TreeNode | null): boolean {
  return dfs(root, -Infinity, Infinity);
}

function dfs(node: TreeNode | null, min: number, max: number): boolean {
  if (!node) return true;

  if (node.val <= min || node.val >= max) return false;

  const isLeftValid = dfs(node.left, min, node.val);
  const isRightValid = dfs(node.right, node.val, max);
  return isLeftValid && isRightValid;
}

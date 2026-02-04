import { TreeNode } from "../../../../Types/TreeNode/TreeNode";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;

  if (!p || !q || p.val !== q.val) return false;

  const isLeftSame = isSameTree(p.left, q.left);
  const isRightSame = isSameTree(p.right, q.right);

  return isLeftSame && isRightSame;
}

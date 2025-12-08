import { TreeNode } from "../../../../Types/TreeNode/TreeNode";

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const maxLeft = maxDepth(root.left);
  const maxRight = maxDepth(root.right);

  return Math.max(maxLeft, maxRight) + 1;
}

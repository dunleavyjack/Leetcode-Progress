import { TreeNode } from "../../types";

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 0 + Math.max(left, right);
}

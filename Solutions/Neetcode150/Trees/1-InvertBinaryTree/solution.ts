import { TreeNode } from "../../../../Types/TreeNode/TreeNode";

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  [root.left, root.right] = [root.right, root.left];

  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);

  return root;
}

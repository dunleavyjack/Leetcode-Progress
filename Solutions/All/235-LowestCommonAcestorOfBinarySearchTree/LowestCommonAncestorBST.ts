import { TreeNode } from "../../../Types";

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return null;

  if (p!.val < root.val && q!.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p!.val > root.val && q!.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

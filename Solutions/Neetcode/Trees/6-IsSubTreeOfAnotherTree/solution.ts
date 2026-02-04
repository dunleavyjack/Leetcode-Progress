import { TreeNode } from "../../../../Types/TreeNode/TreeNode";

export function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null,
): boolean {
  if (!subRoot) return true;

  if (!root) return false;

  if (root.val === subRoot.val && isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(treeOne: TreeNode | null, treeTwo: TreeNode | null) {
  if (!treeOne && !treeTwo) return true;

  if (!treeOne || !treeTwo || treeOne.val !== treeTwo.val) return false;

  const isLeftSame = isSameTree(treeOne.left, treeTwo.left);
  const isRightSame = isSameTree(treeOne.right, treeTwo.right);

  return isLeftSame && isRightSame;
}

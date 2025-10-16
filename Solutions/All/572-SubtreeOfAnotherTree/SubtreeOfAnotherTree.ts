import { TreeNode } from "../../../Types";

export function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean {
  // If the subroot doesn't exist, then technically it is a subtree of root
  if (!subRoot) return true;

  // If the root doesn't exist (and the above line will prove that the subroot exists),
  // then the subroot cannot possibly be a subtree of nothing
  if (!root) return false;

  // If a value is reached while traversing the root that is the same as the root node of the subRoot,
  // check to see if they are identical using the `isSameTree` helper function
  if (root.val === subRoot.val && isSameTree(root, subRoot)) {
    // If they are the same, then return true
    return true;
  } else {
    // Otherwise, recursively traverse the left and right nodes of the root
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }
}

/**
 * This helper function is actually identical to the solution for LC100, is same tree
 */
function isSameTree(rootOne: TreeNode | null, rootTwo: TreeNode | null) {
  if (!rootOne && !rootTwo) return true;
  if (!rootOne || !rootTwo || rootOne.val !== rootTwo.val) return false;

  return (
    isSameTree(rootOne.left, rootTwo.left) &&
    isSameTree(rootOne.right, rootTwo.right)
  );
}

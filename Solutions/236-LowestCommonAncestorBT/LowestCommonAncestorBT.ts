import { TreeNode } from "../../Types";

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  // Base case: Check if the end of the tree is reached.
  if (!root) return null;

  // Check if the current node matches either p or q.
  // If that is the case, return it.
  if (root === p || root === q) {
    return root;
  }

  // Recursively check the left and right subtrees for a "valid" node.
  // "Valid" meaning it contains p or q
  const validLeftNode = lowestCommonAncestor(root.left, p, q);
  const validRightNode = lowestCommonAncestor(root.right, p, q);

  // If the both left and right are valid, we have found the LCA. Return it.
  // Otherwise, we need to keep checking, so any valid node (will detault to null if
  // none have been found yet).
  if (validLeftNode && validRightNode) {
    return root;
  } else {
    return validLeftNode || validRightNode;
  }
}

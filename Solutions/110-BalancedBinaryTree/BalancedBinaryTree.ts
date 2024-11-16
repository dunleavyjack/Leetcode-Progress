import { TreeNode } from "../../Types";

export function isBalanced(root: TreeNode | null): boolean {
  function dfs(node: TreeNode | null): [boolean, number] {
    if (!node) return [true, 0];

    const [isBalancedLeft, maxHeightLeft] = dfs(node.left);
    const [isBalancedRight, maxHeightRight] = dfs(node.right);
    const maxHeight = Math.max(maxHeightLeft, maxHeightRight);
    const isSubtreeBalanced =
      isBalancedLeft &&
      isBalancedRight &&
      Math.abs(maxHeightLeft - maxHeightRight) <= 1;

    return [isSubtreeBalanced, maxHeight + 1];
  }

  const [isBalanced] = dfs(root);
  return isBalanced;
}

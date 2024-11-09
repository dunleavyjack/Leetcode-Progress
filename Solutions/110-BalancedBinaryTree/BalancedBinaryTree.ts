import { TreeNode } from "../../Types";

export function isBalanced(root: TreeNode | null): boolean {
  function dfs(node: TreeNode | null): [boolean, number] {
    if (!node) return [true, 0];

    const [isBalancedLeft, maxHeightLeft] = dfs(node.left);
    const [isBalancedRight, maxHeightRight] = dfs(node.right);

    const isBalanced =
      isBalancedLeft &&
      isBalancedRight &&
      Math.abs(maxHeightLeft - maxHeightRight) <= 1;
    const maxHeight = 1 + Math.max(maxHeightLeft, maxHeightRight);

    return [isBalanced, maxHeight];
  }

  const [isTreeBalanced] = dfs(root);
  return isTreeBalanced;
}

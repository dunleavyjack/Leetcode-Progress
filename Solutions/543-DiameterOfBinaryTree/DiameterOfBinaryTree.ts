import { TreeNode } from "../../Types";

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  function dfs(node: TreeNode | null) {
    if (!node) return 0;

    const maxHeightLeft = dfs(node.left);
    const maxHeightRight = dfs(node.right);
    const maxHeight = Math.max(maxHeightLeft, maxHeightRight);
    const diameter = maxHeightLeft + maxHeightRight;

    maxDiameter = Math.max(maxDiameter, diameter);
    return maxHeight + 1;
  }

  dfs(root);

  return maxDiameter;
}

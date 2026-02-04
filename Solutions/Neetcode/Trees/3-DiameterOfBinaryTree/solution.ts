import { TreeNode } from "../../../../Types/TreeNode/TreeNode";

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  function dfs(node: TreeNode | null) {
    if (!node) return 0;

    const maxLeft = dfs(node.left);
    const maxRight = dfs(node.right);
    const diameter = maxLeft + maxRight;

    maxDiameter = Math.max(diameter, maxDiameter);
    return Math.max(maxLeft, maxRight) + 1;
  }

  dfs(root);

  return maxDiameter;
}

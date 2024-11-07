import { TreeNode } from "../../types";

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  /**
   * This recursive dfs function will calculate and return the max height of the current node.
   * It also calculates the current diameter, and compares it with the `maxDiameter`.
   */
  function dfs(node: TreeNode | null) {
    if (!node) return 0;

    // Calculate the max height of the left and right nodes
    const left = dfs(node.left);
    const right = dfs(node.right);
    const currentDiameter = left + right;

    // Check to see if the current diameter is greater than the max diameter
    maxDiameter = Math.max(maxDiameter, currentDiameter);

    // Return the height
    return Math.max(left, right) + 1;
  }

  dfs(root);

  return maxDiameter;
}

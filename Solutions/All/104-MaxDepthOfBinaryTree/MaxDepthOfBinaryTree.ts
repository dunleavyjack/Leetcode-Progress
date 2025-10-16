import { TreeNode } from "../../../Types";

export function maxDepth(root: TreeNode | null): number {
  function dfs(node: TreeNode | null) {
    if (!node) return 0;

    const maxHeightLeft = dfs(node.left);
    const maxHeightRight = dfs(node.right);
    const maxHeight = Math.max(maxHeightLeft, maxHeightRight);

    return maxHeight + 1;
  }

  return dfs(root);
}

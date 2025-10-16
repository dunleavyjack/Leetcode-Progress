import { TreeNode } from "../../types";

export function levelOrder(root: TreeNode | null): number[][] {
  // Use an array of arrays to store the levels.
  // The index is the level, and the values are stored in that inner array
  let levels: number[][] = [];

  function dfs(node: TreeNode | null, level = 0) {
    if (!node) return;

    // Make sure an empty array exists at the level before pushing, then push the value
    if (!levels[level]) levels.push([]);
    levels[level].push(node.val);

    // Call recursively on the left and right nodes
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root);
  return levels;
}

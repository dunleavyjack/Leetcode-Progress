import { TreeNode } from "../../types";

export function rightSideView(root: TreeNode | null): number[] {
  const levels: number[][] = [];
  const rightMostValues: number[] = [];

  function dfs(node: TreeNode | null, level = 0) {
    if (!node) return;

    if (!levels[level]) levels.push([]);
    levels[level].push(node.val);

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root);

  levels.forEach((level) => {
    rightMostValues.push(level[level.length - 1]);
  });

  return rightMostValues;
}

import { TreeNode } from "../../../../Types/TreeNode/TreeNode";

export function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  function dfs(node: TreeNode | null, level: number) {
    if (!node) return;

    if (!result[level]) {
      result[level] = [];
    }
    result[level].push(node.val);

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root, 0);
  return result;
}

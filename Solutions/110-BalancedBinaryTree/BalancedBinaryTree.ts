import { TreeNode } from "../../Types";

export function isBalanced(root: TreeNode | null): boolean {
  function dfs(node: TreeNode | null): [boolean, number] {
    if (!node) return [true, 0];

    const [isLeftBalanced, maxLeftHeight] = dfs(node.left);
    const [isRightBalanced, maxRightHeight] = dfs(node.right);
    const isBalanced =
      isLeftBalanced &&
      isRightBalanced &&
      Math.abs(maxLeftHeight - maxRightHeight) <= 1;

    return [isBalanced, Math.max(maxLeftHeight, maxRightHeight) + 1];
  }

  const [isBalanced] = dfs(root);
  return isBalanced;
}

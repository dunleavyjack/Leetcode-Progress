import { TreeNode } from "../../../../Types/TreeNode/TreeNode";

export function isBalanced(root: TreeNode | null): boolean {
  function dfs(node: TreeNode | null): [isBalance: boolean, maxHeight: number] {
    if (!node) return [true, 0];

    const [_isLeftBalanced, maxLeftHeight] = dfs(node.left);
    const [_isRightBalanced, maxRightHeight] = dfs(node.right);

    const isSubtreeBalanced = Math.abs(maxLeftHeight - maxRightHeight) <= 1;

    return [isSubtreeBalanced, Math.max(maxLeftHeight, maxRightHeight) + 1];
  }

  const [balanced] = dfs(root);
  return balanced;
}

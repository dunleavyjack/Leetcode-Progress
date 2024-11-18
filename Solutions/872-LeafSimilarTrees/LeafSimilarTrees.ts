import { TreeNode } from "../../Types";

export function leafSimilar(
  root1: TreeNode | null,
  root2: TreeNode | null,
): boolean {
  /*
   * Helper function for assembling the leaves for each root.
   */
  function collectLeaves(root: TreeNode | null) {
    const leaves: number[] = [];

    /**
     * Inner recursive dfs function to traverse each tree
     */
    function dfs(node: TreeNode | null) {
      if (!node) return;

      // If the node has no left or right children, it is a "leaf"
      // So, push it to the `leaves` array
      if (!node.left && !node.right) {
        leaves.push(node.val);
      }

      // Call on left and right side
      dfs(node.left);
      dfs(node.right);
    }

    dfs(root);
    return leaves;
  }

  const leaves1 = collectLeaves(root1);
  const leaves2 = collectLeaves(root2);

  // Compare both leaves arrays. First, for same length and then for similar values
  if (leaves1.length !== leaves2.length) return false;
  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) return false;
  }

  return true;
}

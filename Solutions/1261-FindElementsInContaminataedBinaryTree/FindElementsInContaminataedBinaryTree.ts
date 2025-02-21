import { TreeNode } from "../../Types";

export class FindElements {
  // Create a set to store unique node values.
  private uniqueNodeValues: Set<number>;

  constructor(root: TreeNode | null) {
    // When initialized, initialize the set and un-contaminate the tree
    this.uniqueNodeValues = new Set<number>();
    this.cleanTree(root, 0, 0);
  }

  // Recrusive DFS function to perform the "un-contaminate" logic
  private cleanTree(root: TreeNode | null, x: number, additional: number) {
    if (!root) return;

    // Perform the "un-contaminate" logic, and store the value in the set.
    root.val = 2 * x + additional;
    this.uniqueNodeValues.add(root.val);

    this.cleanTree(root.left, root.val, 1);
    this.cleanTree(root.right, root.val, 2);
  }

  // Just check if the set has the value
  find(target: number): boolean {
    return this.uniqueNodeValues.has(target);
  }
}

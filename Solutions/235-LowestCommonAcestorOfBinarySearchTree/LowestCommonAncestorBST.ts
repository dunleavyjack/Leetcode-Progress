import { TreeNode } from '../../types';

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    let curr = root;

    while (curr) {
        if (curr.val < p!.val && curr.val < q!.val) {
            curr = curr.right;
        } else if (curr.val > p!.val && curr.val > q!.val) {
            curr = curr.left;
        } else return curr;
    }

    // TS return type safety check
    return curr;
}

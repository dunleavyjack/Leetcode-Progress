import { TreeNode } from '../../Definitions';

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const leafValue1 = [];
    const leafValue2 = [];

    traverse(root1, leafValue1);
    traverse(root2, leafValue2);

    if (leafValue1.length !== leafValue2.length) return false;

    for (let i = 0; i < leafValue1.length; i++) {
        if (leafValue1[i] !== leafValue2[i]) return false;
    }

    return true;
}

function traverse(node: TreeNode | null, leafValueSeq: number[] = []) {
    if (!node) return;
    if (!node.left && !node.right) leafValueSeq.push(node.val);

    traverse(node.left, leafValueSeq);
    traverse(node.right, leafValueSeq);
}

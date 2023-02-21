import { ListNode } from '../../Definitions/ListNode';

function detectCycle(head: ListNode | null): ListNode | null {
    let nodes = new Set<ListNode>();
    let currentNode = head;

    while (currentNode) {
        if (nodes.has(currentNode)) return currentNode;
        else nodes.add(currentNode);
        currentNode = currentNode.next;
    }

    return null;
}

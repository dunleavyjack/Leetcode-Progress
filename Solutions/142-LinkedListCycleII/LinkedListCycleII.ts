function detectCycle(head: ListNode | null): ListNode | null {
    let nodesInList = new Set<ListNode>();
    let currentNode: ListNode | null = head;

    while (currentNode) {
        if (nodesInList.has(currentNode)) return currentNode;
        else {
            nodesInList.add(currentNode);
            currentNode = currentNode.next;
        }
    }

    return currentNode;
}

import { ListNode } from "../../../types";

function detectCycle(head: ListNode | null): ListNode | null {
  let uniqueNodes = new Set<ListNode>();
  let currentNode = head;

  while (currentNode) {
    if (uniqueNodes.has(currentNode)) return currentNode;
    else uniqueNodes.add(currentNode);
    currentNode = currentNode.next;
  }

  return null;
}

import { ListNode } from "../../../types";

function deleteNode(node: ListNode | null): void {
  if (!node) return;

  node.val = node.next!.val;
  node.next = node.next!.next;
}

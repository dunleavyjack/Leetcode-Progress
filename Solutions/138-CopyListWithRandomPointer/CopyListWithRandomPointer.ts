import { ListNodeWithRandom as _Node } from "../../Types/ListNodeWithRandom/ListNodeWithRandom";

function copyRandomList(head: _Node | null): _Node | null {
  let oldToCopy = new Map<_Node | null, _Node | null>();

  let curr = head;
  while (curr) {
    const copy = new _Node(curr.val);
    oldToCopy.set(curr, copy);
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    const copy = oldToCopy.get(curr);
    copy.next = oldToCopy.get(curr.next) ?? null;
    copy.random = oldToCopy.get(curr.random) ?? null;
    curr = curr.next;
  }

  return oldToCopy.get(head);
}

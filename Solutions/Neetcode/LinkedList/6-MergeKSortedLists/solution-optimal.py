from Types.ListNode.ListNode import ListNode
from typing import List, Optional
from heapq import heappop, heappush


class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        heap = []

        for i, node in enumerate(lists):
            if node:
                heappush(heap, (node.val, i, node))

        dummy = ListNode()
        curr = dummy

        while heap:
            _val, i, node = heappop(heap)
            curr.next = node
            curr = curr.next
            node = node.next

            if node:
                heappush(heap, (node.val, i, node))

        return dummy.next

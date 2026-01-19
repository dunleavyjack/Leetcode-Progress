from Types.ListNode.ListNode import ListNode


class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: Optional[ListNode]
        :type n: int
        :rtype: Optional[ListNode]
        """
        dummy = ListNode(0, head)
        p1 = dummy
        p2 = dummy

        for _ in range(n):
            p2 = p2.next

        while p2 and p2.next:
            p1 = p1.next
            p2 = p2.next

        p1.next = p1.next.next or None

        return dummy.next

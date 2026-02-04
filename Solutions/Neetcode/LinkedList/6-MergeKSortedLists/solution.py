from Types.ListNode.ListNode import ListNode


# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[Optional[ListNode]]
        :rtype: Optional[ListNode]
        """
        dummy = ListNode()
        curr = dummy

        lists_remain = True

        while lists_remain:
            min_list_val = float("infinity")
            min_list_index = -1

            for i in range(len(lists)):
                list = lists[i]
                if list:
                    if list.val < min_list_val:
                        min_list_val = list.val
                        min_list_index = i

            if min_list_val == float("infinity"):
                lists_remain = False
                break

            curr.next = lists[min_list_index]
            lists[min_list_index] = lists[min_list_index].next
            curr = curr.next

        return dummy.next

        return dummy.next

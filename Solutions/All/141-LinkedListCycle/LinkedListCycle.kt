class Solution {
    fun hasCycle(head: ListNode?): Boolean {
        var slow = head
        var fast = head

        while (slow != null && fast != null && fast.next != null) {
            slow = slow.next
            fast = fast.next.next

            if (slow == fast) return true
        }

        return false
    }
}

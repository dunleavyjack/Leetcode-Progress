# Notes: LC 160 Intersection Of Two Linked Lists

This one has a clever solution! The idea is to use two pointers, one at the
start of the first list and one at the start of the second. While both pointers
are pointing to the same node, increment each one to the next node. When either
pointer reaches the end of it's list, point it to the beginning of the other.

It works because after both nodes get reassigned, if there is an intersection
point, they will be at equal distances from it. Also, since both nodes will be
traversing the same amount of nodes (List A + List B), no matter if there is an
intersection or not, both node will eventually be null at the same time, ending
the while loop iteration.

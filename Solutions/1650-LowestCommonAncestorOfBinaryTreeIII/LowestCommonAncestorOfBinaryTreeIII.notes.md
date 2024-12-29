# Notes: LC 1650 Lowest Common Ancestor Of Binary Tree III

This one is almost exactly the same as `LC160: IntersectionOfTwoLinkedLists`,
and in my opinion totally different than the other two `LCA` problems. The idea
is to use two pointers to locate the intersection point between the two provided
nodes. Since this problem has a special definition of what a `node` is, that
includes a `parent` property, you can solve it the exact same way as you would a
linked list.

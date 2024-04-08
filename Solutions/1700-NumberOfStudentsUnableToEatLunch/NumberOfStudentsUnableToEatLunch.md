Keep track of a count of skipped students (a skipped student is one who goes to the end of the queue)

-   Each time I skip a student I will increment the count
-   Each time I match a student with a sandwich I will reset the count
-   If the count is ever equal to the number of students, then I have a cycle

Compare the value at the first index of students with the value at the same index of sandwiches

-   If the student and sandwich are the same, remove **both** from queue
-   If not, send the student to the end of the queue

TODO: Examine this approach below:
students is all 1 or all 0
sandwiches is all the opposite

from typing import List


class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pos_to_speed = {}
        for i, p in enumerate(position):
            pos_to_speed[p] = speed[i]

        position.sort(reverse=True)

        stack = []
        for p in position:
            s = pos_to_speed[p]
            time_to_target = (target - p) / s

            if not stack or (stack and stack[-1] < time_to_target):
                stack.append(time_to_target)

        return len(stack)

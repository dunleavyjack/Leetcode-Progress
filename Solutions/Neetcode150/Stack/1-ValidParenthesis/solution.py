class Solution:
    def isValid(self, s: str) -> bool:
        closedToOpen = {")": "(", "]": "[", "}": "{"}
        stack = []

        for char in s:
            if char in closedToOpen:
                if stack and stack[-1] == closedToOpen[char]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(char)

        return True if not len(stack) else False


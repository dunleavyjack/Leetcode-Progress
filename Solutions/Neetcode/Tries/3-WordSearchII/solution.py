from typing import List

class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

    def add_word(self, word):
        curr = self

        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()
            curr = curr.children[char]
        
        curr.is_word = True

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        root = TrieNode()
        
        for word in words:
            root.add_word(word)

        ROWS = len(board)
        COLS = len(board[0])

        res = set()

        def dfs(r, c, node, word):
            if (
                r < 0 or
                c < 0 or
                r >= ROWS or
                c >= COLS or
                board[r][c] not in node.children
            ):
                return

            char = board[r][c]
            word += char
            node = node.children[char]

            if node.is_word:
                res.add(word)

            board[r][c] = "#"
            dfs(r + 1, c, node, word)
            dfs(r - 1, c, node, word)
            dfs(r, c + 1, node, word)
            dfs(r, c - 1, node, word)
            board[r][c] = char

        for r in range(ROWS):
            for c in range(COLS):
                dfs(r, c, root, "")

        return list(res) 

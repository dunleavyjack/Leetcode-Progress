class TrieNode:
    def __init__(self):
        self.children = {}
        self.end_of_word = False


class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        curr = self.root

        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()
            curr = curr.children[char]

        curr.end_of_word = True

    def search(self, word: str) -> bool:
        def dfs(i, root):
            curr = root

            for j in range(i, len(word)):
                char = word[j]
                if char == ".":
                    for child in curr.children.values():
                        found = dfs(j + 1, child)
                        if found:
                            return True
                    return False
                else:
                    if char not in curr.children:
                        return False
                    curr = curr.children[char]
            return curr.end_of_word

        return dfs(0, self.root)

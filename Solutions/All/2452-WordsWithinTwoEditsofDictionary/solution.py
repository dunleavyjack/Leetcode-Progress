from typing import List


class Solution:
    def twoEditWords(self, queries: List[str], dictionary: List[str]) -> List[str]:
        res = []

        for word in queries:
            for d_word in dictionary:
                replacements = 0

                for i in range(len(word)):
                    if word[i] != d_word[i]:
                        replacements += 1

                if replacements <= 2:
                    res.append(word)
                    break

        return res

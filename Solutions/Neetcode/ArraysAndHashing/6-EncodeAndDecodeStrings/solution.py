from typing import List


class Codec:
    def encode(self, strs: List[str]) -> str:
        """Encodes a list of strings to a single string."""
        encoded = ""
        for word in strs:
            encoded += str(len(word)) + "#" + word
        return encoded

    def decode(self, s: str) -> List[str]:
        """Decodes a single string to a list of strings."""
        decoded = []
        i = 0
        while i < len(s):
            j = i
            while s[j] != "#":
                j += 1

            word_len = int(s[i:j])
            word_start = j + 1
            word_end = word_start + word_len
            word = s[word_start:word_end]
            decoded.append(word)
            i = word_end

        return decoded

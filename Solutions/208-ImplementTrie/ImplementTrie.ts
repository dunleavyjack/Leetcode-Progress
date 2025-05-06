class TrieNode {
  children: Array<TrieNode | null>;
  endOfWord: boolean;

  constructor() {
    this.children = Array.from({ length: 26 }, () => null);
    this.endOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let curr = this.root;

    for (let char of word) {
      const letterCode = this.getLetterCode(char);
      if (curr.children[letterCode] === null) {
        const newNode = new TrieNode();
        curr.children[letterCode] = newNode;
      }

      curr = curr.children[letterCode];
    }

    curr.endOfWord = true;
  }

  search(word: string): boolean {
    let curr = this.root;

    for (let char of word) {
      const letterCode = this.getLetterCode(char);
      if (!curr.children[letterCode]) return false;

      curr = curr.children[letterCode];
    }

    return curr.endOfWord;
  }

  startsWith(prefix: string): boolean {
    let curr = this.root;

    for (let char of prefix) {
      const letterCode = this.getLetterCode(char);

      if (!curr.children[letterCode]) return false;
      curr = curr.children[letterCode];
    }

    return true;
  }

  private getLetterCode(char: string) {
    return char.charCodeAt(0) - "a".charCodeAt(0);
  }
}

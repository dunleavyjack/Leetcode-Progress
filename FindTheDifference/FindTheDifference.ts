type HashMap = {
  [key: string]: number;
};

const findTheDifference = (s: string, t: string): string => {
  let frequencyCounterS: HashMap = {};
  let frequencyCounterT: HashMap = {};

  // Count frequencies of each letter in s
  for (let letter of s) {
    frequencyCounterS[letter]
      ? frequencyCounterS[letter] += 1
      : frequencyCounterS[letter] = 1
  };

  // Counter frequencies of each letter in t
  for (let letter of t) {
    frequencyCounterT[letter]
      ? frequencyCounterT[letter] += 1
      : frequencyCounterT[letter] = 1
  };

  // Compare frequencies of s and t
  for (let letter in frequencyCounterS) {
    // Check if the letter is "new", i.e. in t but not s
    if (!frequencyCounterT[letter]) return letter;
    else if (frequencyCounterS[letter] !== frequencyCounterT[letter]) return letter;
  }

  return s;
};


console.log(findTheDifference("aaacb", "acby"));


const mergeStrings = (strOne: string, strTwo: string): string => {

  let result: string = "";

  // Create two pointers
  let i: number = 0;
  let j: number = 0;

  while (i < strOne.length && j < strTwo.length) {
    result += strOne[i];
    result += strTwo[j];
    i++;
    j++;
  }

  while (i < strOne.length) {
    result += strOne[i];
    i++;
  }

  while (j < strTwo.length) {
    result += strTwo[j];
    j++;
  }

  return result;
}

console.log(mergeStrings("acemmmmmm", "bdf"))

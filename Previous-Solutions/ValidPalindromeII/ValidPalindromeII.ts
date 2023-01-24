const validPalindromeII = (s: string): boolean => {
  let left: number = 0;
  let right: number = s.length - 1;
  let numberOfErrors = 0;

  while (left < right) {
    if (s[left] !== s[right]) {
      numberOfErrors++;
      right--;
    }
    left++;
    right--;
  }

  console.log("Number of errors:", numberOfErrors);
  return numberOfErrors < 2 ? true : false;
}

console.log(validPalindromeII("raocecar"))


/*
 *     L     R
 * r a c e c o a r
 *
 *
 * **/

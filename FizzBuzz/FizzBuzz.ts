const fizzBuzz = (num: number): string[] => {
  let result: string[] = []
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("Fizzbuzz")
    } else if (i % 3 === 0) {
      result.push('Fizz')
    } else if (i % 5 === 0) {
      result.push('Buzz')
    } else {
      result.push(i.toString());
    }
  }
  return result
}

console.log(fizzBuzz(15));

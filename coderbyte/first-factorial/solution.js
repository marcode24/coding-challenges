function firstFactorial(num) {
  // code goes here
  let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
}

module.exports = firstFactorial;

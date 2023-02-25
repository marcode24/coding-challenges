function powerSumDigTerm(n) {
  const arr = [];
  for (let i = 2; i < 100; i++) {
    for (let j = 2; j < 10; j++) {
      const num = i ** j;
      const sum = num
        .toString()
        .split('')
        .reduce((a, b) => Number(a) + Number(b), 0);
      if (sum === i) arr.push(num);
    }
  }
  return arr.sort((a, b) => a - b)[n - 1];
}

module.exports = powerSumDigTerm;

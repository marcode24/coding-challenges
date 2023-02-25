const isHappy = (n) => {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = n
      .toString()
      .split('')
      .reduce((acc, cur) => acc + cur ** 2, 0);
  }
  return n === 1;
};

module.exports = isHappy;

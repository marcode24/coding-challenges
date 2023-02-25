const pell = (n) => {
  if (n <= 2) return n;
  let a = 1;
  let b = 2;
  let c;
  for (let i = 3; i <= n; i++) {
    c = BigInt(BigInt(2) * BigInt(b) + BigInt(a));
    a = BigInt(b);
    b = BigInt(c);
  }
  return b;
};

module.exports = pell;

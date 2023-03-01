const josephusSurvivor = (n, k) => {
  if (n === 1) return 1;
  return (josephusSurvivor(n - 1, k) + k - 1) % (n + 1);
};

module.exports = josephusSurvivor;

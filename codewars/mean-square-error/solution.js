const meanSquareError = (a, b) => {
  const sum = a.reduce((acc, curr, i) => acc + (curr - b[i]) ** 2, 0);
  return sum / a.length;
};

module.exports = meanSquareError;

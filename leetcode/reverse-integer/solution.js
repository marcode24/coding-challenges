const reverse = (x) => {
  const isNegative = x < 0;
  const resultReversed = +[...Math.abs(x).toString()].reverse().join('');
  const result = !isNegative
    ? parseInt(resultReversed, 10)
    : resultReversed - (resultReversed * 2);
  return Math.abs(result) > 2 ** 31 ? 0 : result;
};

module.exports = reverse;

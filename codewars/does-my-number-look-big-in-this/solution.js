const narcissistic = (value) => {
  const newValueStr = value.toString();
  const newValue = [...newValueStr]
    .reduce((acc, val) => acc += val ** newValueStr.length, 0)
    .toString();
  return newValueStr === newValue;
};

module.exports = narcissistic;

const highAndLow = (numbers) => {
  const array = numbers.split(' ').map(Number);
  return `${Math.max(...array)} ${Math.min(...array)}`;
};

module.exports = highAndLow;

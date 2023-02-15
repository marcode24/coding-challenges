function numberJoy(n) {
  const numberInitial = n;
  n = n.toString().split('');
  const result = n.reduce((acc, curr) => +acc + +curr, 0);
  const resultReverse = Number(result.toString().split('').reverse().join(''));
  return result * resultReverse === numberInitial;
}

module.exports = numberJoy;

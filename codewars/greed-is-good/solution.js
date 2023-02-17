const rules = {
  '1s': 1000,
  '2s': 200,
  '3s': 300,
  '4s': 400,
  '5s': 500,
  '6s': 600,
  1: 100,
  5: 50,
};

function resultTemp(totalElements, firstRule, secondRule) {
  let result = 0;
  if (totalElements >= 3) {
    result += rules[firstRule]; // -> '1s' | '2s'...
    totalElements -= 3;
  }
  if (secondRule) {
    result += rules[secondRule] * totalElements;
  }
  return result;
}

function score(dice) {
  let result = 0;
  const rulesArray = Object.keys(rules);
  for (let i = 1; i < 7; i++) {
    if (dice.includes(i)) {
      const totalElmts = dice.filter((item) => item === i).length;
      if (i === 1) result += resultTemp(totalElmts, rulesArray[2], rulesArray[0]);
      if (i === 5) result += resultTemp(totalElmts, rulesArray[6], rulesArray[1]);
      if (i === 2 && totalElmts >= 3) result += resultTemp(totalElmts, rulesArray[3]);
      if (i === 3 && totalElmts >= 3) result += resultTemp(totalElmts, rulesArray[4]);
      if (i === 4 && totalElmts >= 3) result += resultTemp(totalElmts, rulesArray[5]);
      if (i === 6 && totalElmts >= 3) result += resultTemp(totalElmts, rulesArray[7]);
    }
  }
  return result;
}

module.exports = score;

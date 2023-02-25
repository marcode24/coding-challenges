function bracketCombinations(num) {
  const result = [];

  function backtrack(cur, openCount, closeCount) {
    if (cur.length === num * 2) {
      result.push(cur);
      return;
    }
    if (openCount < num) {
      backtrack(`${cur}(`, openCount + 1, closeCount);
    }
    if (closeCount < openCount) {
      backtrack(`${cur})`, openCount, closeCount + 1);
    }
  }

  backtrack('', 0, 0);

  return result.length;
}

module.exports = bracketCombinations;

const uniqueInOrder = (iterable) => {
  if (!Array.isArray(iterable)) {
    const resultTemp = [];
    let charTemp = iterable[0];
    let stringTemp = iterable[0];
    if ([...iterable].length <= 1) {
      return [...iterable];
    }
    for (let i = 1; i < iterable.length; i++) {
      if (iterable[i] === charTemp) {
        stringTemp += iterable[i];
      } else {
        resultTemp.push(stringTemp);
        stringTemp = iterable[i];
        charTemp = iterable[i];
      }
      if (i === iterable.length - 1) {
        resultTemp.push(stringTemp);
      }
    }
    return resultTemp.map((el) => [...new Set(el)][0]);
  }
  return [...new Set(iterable)];
};

module.exports = uniqueInOrder;

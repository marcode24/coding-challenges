const longestConsec = (strarr, k) => {
  if (k <= 0 || k > strarr.length) {
    return '';
  }
  let longestWord = '';
  let longestWordTemp = '';
  for (let i = 0; i <= strarr.length - k; i++) {
    longestWordTemp = strarr.slice(i, i + k).join('');
    if (longestWordTemp.length > longestWord.length) {
      longestWord = longestWordTemp;
    }
  }
  return longestWord;
};

module.exports = longestConsec;

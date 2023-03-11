const expandedForm = (num) => {
  num = num.toString().split('').reverse();
  const results = [];
  num.forEach((item, index) => {
    if (item !== '0') {
      results.push(`${item}${'0'.repeat(index)}`);
    }
  });
  return results.reverse().join(' + ');
};

module.exports = expandedForm;

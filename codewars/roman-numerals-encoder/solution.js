const solution = (number) => {
  const romanNumerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };

  const romanNumeralsKeys = Object.keys(romanNumerals).reverse();
  let result = '';

  Array.from({ length: romanNumeralsKeys.length }).forEach((_, i) => {
    const key = romanNumeralsKeys[i];
    const value = romanNumerals[key];
    while (number >= key) {
      result += value;
      number -= key;
    }
  });

  return result;
};

module.exports = solution;

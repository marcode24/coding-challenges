const whatCentury = (year) => {
  const suffixRules = [
    { suffix: 'st', rule: (c) => c % 10 === 1 && c % 100 !== 11 },
    { suffix: 'nd', rule: (c) => c % 10 === 2 && c % 100 !== 12 },
    { suffix: 'rd', rule: (c) => c % 10 === 3 && c % 100 !== 13 },
    { suffix: 'th', rule: () => true },
  ];
  const century = Math.ceil(year / 100);
  const { suffix } = suffixRules.find((rule) => rule.rule(century));
  return `${century}${suffix}`;
};

module.exports = whatCentury;

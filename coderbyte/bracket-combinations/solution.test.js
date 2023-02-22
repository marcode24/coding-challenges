const bracketCombinations = require('./solution');

describe('Bracket Combinations', () => {
  const testCases = [
    {
      input: 4,
      output: 14,
    },
    {
      input: 3,
      output: 5,
    },
    {
      input: 2,
      output: 2,
    },
  ];

  it('should return a number type', () => {
    expect(typeof bracketCombinations(4)).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(bracketCombinations(testCase.input)).toBe(testCase.output);
  });
});

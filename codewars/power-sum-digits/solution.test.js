const powerSumDigTerm = require('./solution');

describe('Numbers that are a power of their sum of digits', () => {
  const testCases = [
    {
      input: 1,
      output: 81,
    },
    {
      input: 2,
      output: 512,
    },
    {
      input: 3,
      output: 2401,
    },
    {
      input: 4,
      output: 4913,
    },
    {
      input: 5,
      output: 5832,
    },
  ];

  it('should return a number type', () => {
    expect(typeof powerSumDigTerm(1)).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(powerSumDigTerm(testCase.input)).toBe(testCase.output);
  });
});

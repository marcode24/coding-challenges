const firstFactorial = require('./solution');

describe('First Factorial', () => {
  const testCases = [
    {
      input: 4,
      output: 24,
    },
    {
      input: 8,
      output: 40320,
    },
    {
      input: 12,
      output: 479001600,
    },
  ];

  it('should return a number type', () => {
    expect(typeof firstFactorial(4)).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(firstFactorial(testCase.input)).toBe(testCase.output);
  });
});

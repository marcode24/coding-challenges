const narcissistic = require('./solution');

describe('Does My Number Look Big In This', () => {
  const testCases = [
    {
      input: 7,
      output: true,
    },
    {
      input: 153,
      output: true,
    },
    {
      input: 122,
      output: false,
    },
    {
      input: 487,
      output: false,
    },
    {
      input: 1652,
      output: false,
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof narcissistic(7)).toBe('boolean');
  });

  it.each(testCases)('should return $output for $input', (testCase) => {
    expect(narcissistic(testCase.input)).toBe(testCase.output);
  });
});

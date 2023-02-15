const numberJoy = require('./solution');

describe('Especially Joyful Numbers', () => {
  const testCases = [
    {
      input: 1997,
      output: false,
    },
    {
      input: 1998,
      output: false,
    },
    {
      input: 1729,
      output: true,
    },
    {
      input: 1,
      output: true,
    },
    {
      input: 18,
      output: false,
    },
    {
      input: 81,
      output: true,
    },
    {
      input: 1458,
      output: true,
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof numberJoy(1)).toBe('boolean');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(numberJoy(testCase.input)).toBe(testCase.output);
  });
});

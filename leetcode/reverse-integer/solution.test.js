const reverse = require('./solution');

describe('Reverse Integer', () => {
  const testCases = [
    {
      input: 123,
      output: 321,
    },
    {
      input: -123,
      output: -321,
    },
    {
      input: 120,
      output: 21,
    },
    {
      input: 1534236469,
      output: 0,
    },
  ];

  it('should return a number type', () => {
    expect(typeof reverse(123)).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(reverse(testCase.input)).toBe(testCase.output);
  });
});

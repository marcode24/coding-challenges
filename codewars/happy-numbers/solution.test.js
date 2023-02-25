const isHappy = require('./solution');

describe('Happy Numbers', () => {
  const testCases = [
    {
      input: 7,
      expected: true,
    },
    {
      input: 1,
      expected: true,
    },
    {
      input: 3,
      expected: false,
    },
    {
      input: 16,
      expected: false,
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof isHappy(7)).toBe('boolean');
  });

  it.each(testCases)('should return $expected for $input', ({ input, expected }) => {
    expect(isHappy(input)).toBe(expected);
  });
});

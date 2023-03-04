const chaserSchedule = require('./solution');

describe('Chasers Schedule', () => {
  const testCases = [
    {
      input: [2, 4],
      expected: 10,
    },
    {
      input: [1, 1],
      expected: 2,
    },
    {
      input: [829, 135],
      expected: 161453,
    },
    {
      input: [742, 775],
      expected: 667182,
    },
  ];

  it('should return a number type', () => {
    expect(typeof chaserSchedule(1, 1)).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    const { input, expected } = testCase;
    expect(chaserSchedule(...input)).toBe(expected);
  });
});

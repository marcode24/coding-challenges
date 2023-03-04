const josephusSurvivor = require('./solution');

describe('Josephus Survivor', () => {
  const testCases = [
    {
      input: [7, 3],
      output: 4,
    },
    {
      input: [10, 4],
      output: 6,
    },
    {
      input: [12, 5],
      output: 5,
    },
    {
      input: [15, 3],
      output: 8,
    },
  ];

  it('should return a number type', () => {
    expect(typeof josephusSurvivor(15, 3)).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(josephusSurvivor(...testCase.input)).toBe(testCase.output);
  });
});

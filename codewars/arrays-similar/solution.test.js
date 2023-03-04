const arraysSimilar = require('./solution');

describe('Arrays Similar', () => {
  const testCases = [
    {
      input: [[1, 2, 3, 4, 5], [2, 3, 4, 1, 5]],
      output: true,
    },
    {
      input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [5, 2, 3, 4, 7, 8, 9, 1, 0, 6]],
      output: true,
    },
    {
      input: [[1, 2, 3, '4', 5], [2, 3, 4, '1', 5]],
      output: false,
    },
    {
      input: [[1, 2, 3, '3', 5], [2, 3, 4, '1', 5]],
      output: false,
    },
    {
      input: [[2, 3], [1, 2, 4]],
      output: false,
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof arraysSimilar([1, 2], [2, 1])).toBe('boolean');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(arraysSimilar(...testCase.input)).toBe(testCase.output);
  });
});

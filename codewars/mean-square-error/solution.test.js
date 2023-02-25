const meanSquareError = require('./solution');

describe('Mean Square Error', () => {
  const testCases = [
    {
      input: [[1, 2, 3], [4, 5, 6]],
      output: 9,
    },
    {
      input: [[10, 20, 10, 2], [10, 25, 5, -2]],
      output: 16.5,
    },
    {
      input: [[-1, 0], [0, -1]],
      output: 1,
    },
  ];

  it('should return a number type', () => {
    expect(typeof meanSquareError([1, 2, 3], [1, 2, 3])).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(meanSquareError(...testCase.input)).toBe(testCase.output);
  });
});

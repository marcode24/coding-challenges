const findOdd = require('./solution');

describe('Find the odd int', () => {
  const testCases = [
    {
      input: [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1],
      output: 4,
    },
    {
      input: [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5],
      output: -1,
    },
    {
      input: [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5],
      output: 5,
    },
    {
      input: [10],
      output: 10,
    },
    {
      input: [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1],
      output: 10,
    },
    {
      input: [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10],
      output: 1,
    },
  ];

  it('should return a number type', () => {
    expect(typeof findOdd([1, 2, 3])).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(findOdd(testCase.input)).toBe(testCase.output);
  });
});

const binaryArrayToNumber = require('./solution');

describe('Ones and Zeros', () => {
  const testCases = [
    {
      input: [0, 0, 0, 1],
      output: 1,
    },
    {
      input: [0, 0, 1, 0],
      output: 2,
    },
    {
      input: [0, 1, 0, 1],
      output: 5,
    },
    {
      input: [1, 0, 0, 1],
      output: 9,
    },
    {
      input: [0, 1, 1, 1],
      output: 7,
    },
  ];

  it('should return a number type', () => {
    expect(typeof binaryArrayToNumber([0, 0, 0, 1])).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(binaryArrayToNumber(testCase.input)).toBe(testCase.output);
  });
});

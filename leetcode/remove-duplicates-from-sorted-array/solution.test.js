const removeDuplicates = require('./solution');

describe('Remove Duplicates From Sorted Array', () => {
  const testCases = [
    {
      input: [1, 1, 2],
      output: 2,
    },
    {
      input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      output: 5,
    },
    {
      input: [],
      output: 0,
    },
  ];

  it('should return a number type', () => {
    expect(typeof removeDuplicates([1, 1, 2])).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(removeDuplicates(testCase.input)).toBe(testCase.output);
  });
});

const removeElement = require('./solution');

describe('Remove Element', () => {
  const testCases = [
    {
      input: [
        [3, 2, 2, 3],
        3,
      ],
      output: 2,
    },
    {
      input: [
        [0, 1, 2, 2, 3, 0, 4, 2],
        2,
      ],
      output: 5,
    },
  ];

  it('should return a number type', () => {
    expect(typeof removeElement([1, 1, 2])).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(removeElement(...testCase.input)).toBe(testCase.output);
  });
});

const uniqueInOrder = require('./solution');

describe('Unique In Order', () => {
  const testCases = [
    {
      input: 'AAAABBBCCDAAABBB',
      output: ['A', 'B', 'C', 'D', 'A', 'B'],
    },
    {
      input: 'ABBCcAD',
      output: ['A', 'B', 'C', 'c', 'A', 'D'],
    },
    {
      input: [1, 2, 2, 3, 3],
      output: [1, 2, 3],
    },
    {
      input: 'A',
      output: ['A'],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(uniqueInOrder('AABBC'))).toBe(true);
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(uniqueInOrder(testCase.input)).toStrictEqual(testCase.output);
  });
});

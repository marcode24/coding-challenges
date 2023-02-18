const highAndLow = require('./solution');

describe('Highest and lowest', () => {
  const testCases = [
    {
      input: '1 2 3 4 5',
      output: '5 1',
    },
    {
      input: '1 2 -3 4 5',
      output: '5 -3',
    },
    {
      input: '1 9 3 4 -5',
      output: '9 -5',
    },
  ];

  it('should return a string type', () => {
    expect(typeof highAndLow('1 2 3 4 5')).toBe('string');
  });

  it.each(testCases)('should return the correct output', ({ input, output }) => {
    expect(highAndLow(input)).toBe(output);
  });
});

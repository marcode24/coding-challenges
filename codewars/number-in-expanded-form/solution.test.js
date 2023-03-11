const expandedForm = require('./solution');

describe('Number in expanded form', () => {
  const testCases = [
    {
      input: 12,
      output: '10 + 2',
    },
    {
      input: 42,
      output: '40 + 2',
    },
    {
      input: 70304,
      output: '70000 + 300 + 4',
    },
    {
      input: 10345354,
      output: '10000000 + 300000 + 40000 + 5000 + 300 + 50 + 4',
    },
  ];

  it('should return a string type', () => {
    expect(typeof expandedForm(12)).toBe('string');
  });

  it.each(testCases)('should return the correct output', ({ input, output }) => {
    expect(expandedForm(input)).toBe(output);
  });
});

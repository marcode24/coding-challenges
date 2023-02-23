const pell = require('./solution');

describe('Pell Numbers', () => {
  const testCases = [
    {
      input: 1,
      output: 1,
    },
    {
      input: 2,
      output: 2,
    },
    {
      input: 5,
      output: 29n,
    },
    {
      input: 7,
      output: 169n,
    },
    {
      input: 100,
      output: 66992092050551637663438906713182313772n,
    },
  ];

  it('should return a number type', () => {
    expect(typeof pell(1)).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(pell(testCase.input)).toBe(testCase.output);
  });
});

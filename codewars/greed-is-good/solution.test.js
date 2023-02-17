const score = require('./solution');

describe('Greed is Good', () => {
  const testCases = [
    {
      input: [2, 3, 4, 6, 2],
      output: 0,
    },
    {
      input: [1, 1, 2, 2, 2],
      output: 400,
    },
    {
      input: [4, 4, 4, 3, 3],
      output: 400,
    },
    {
      input: [2, 4, 4, 5, 4],
      output: 450,
    },
    {
      input: [1, 1, 1, 1, 3],
      output: 1100,
    },
    {
      input: [1, 1, 1, 1, 5],
      output: 1150,
    },
    {
      input: [2, 4, 4, 5, 4],
      output: 450,
    },
    {
      input: [3, 4, 5, 3, 3],
      output: 350,
    },
    {
      input: [1, 5, 1, 3, 4],
      output: 250,
    },
    {
      input: [5, 5, 5, 5, 5],
      output: 600,
    },
    {
      input: [6, 6, 6, 6, 6],
      output: 600,
    },
  ];

  it('should return a number type', () => {
    expect(typeof score([2, 3, 4, 6, 2])).toBe('number');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(score(input)).toBe(output);
  });
});

const solution = require('./solution');

describe('Roman Numerals Encoder', () => {
  const testCases = [
    {
      input: 1,
      output: 'I',
    },
    {
      input: 2,
      output: 'II',
    },
    {
      input: 3,
      output: 'III',
    },
    {
      input: 4,
      output: 'IV',
    },
    {
      input: 5,
      output: 'V',
    },
    {
      input: 9,
      output: 'IX',
    },
    {
      input: 10,
      output: 'X',
    },
    {
      input: 11,
      output: 'XI',
    },
    {
      input: 19,
      output: 'XIX',
    },
    {
      input: 22,
      output: 'XXII',
    },
    {
      input: 15,
      output: 'XV',
    },
    {
      input: 1000,
      output: 'M',
    },
    {
      input: 1001,
      output: 'MI',
    },
    {
      input: 1990,
      output: 'MCMXC',
    },
    {
      input: 2007,
      output: 'MMVII',
    },
    {
      input: 2008,
      output: 'MMVIII',
    },
  ];

  it('should return a string type', () => {
    expect(solution(1)).toBe('I');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(solution(testCase.input)).toBe(testCase.output);
  });
});

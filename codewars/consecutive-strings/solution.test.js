const longestConsec = require('./solution');

describe('Consecutive Strings', () => {
  const testCases = [
    {
      input: ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'],
      k: 2,
      output: 'abigailtheta',
    },
    {
      input: ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx',
        'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'],
      k: 1,
      output: 'oocccffuucccjjjkkkjyyyeehh',
    },
    {
      input: [],
      k: 3,
      output: '',
    },
    {
      input: ['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv',
        'vweqilsfytihvrzlaodfixoyxvyuyvgpck'],
      k: 2,
      output: 'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck',
    },
    {
      input: ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'],
      k: 3,
      output: 'ixoyx3452zzzzzzzzzzzz',
    },
    {
      input: ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'],
      k: 0,
      output: '',
    },
  ];

  it('should return a string type', () => {
    const result = longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2);
    expect(typeof result).toBe('string');
  });

  it.each(testCases)('should return "$output"', (testCase) => {
    const result = longestConsec(testCase.input, testCase.k);
    expect(result).toBe(testCase.output);
  });
});

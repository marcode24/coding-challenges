const reverse = require('./solution');

describe('Reverse every other word in the string', () => {
  const testCases = [
    {
      input: 'Did it work?',
      output: 'Did ti work?',
    },
    {
      input: 'I really hope it works this time...',
      output: 'I yllaer hope ti works siht time...',
    },
    {
      input: 'Reverse this string, please!',
      output: 'Reverse siht string, !esaelp',
    },
  ];

  it('should return a string type', () => {
    expect(typeof reverse('Did it work?')).toBe('string');
  });

  it.each(testCases)('should return the correct output', ({ input, output }) => {
    expect(reverse(input)).toBe(output);
  });
});

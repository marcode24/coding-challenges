const lengthOfLastWord = require('./solution');

describe('Length Of Last Word', () => {
  const testCases = [
    {
      input: 'Hello World',
      output: 5,
    },
    {
      input: ' ',
      output: 0,
    },
    {
      input: 'a ',
      output: 1,
    },
    {
      input: 'a',
      output: 1,
    },
    {
      input: '   fly me   to   the moon  ',
      output: 4,
    },
    {
      input: 'luffy is still joyboy',
      output: 6,
    },
  ];

  it('should return a number type', () => {
    const result = lengthOfLastWord('Hello World');
    expect(typeof result).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    const result = lengthOfLastWord(testCase.input);
    expect(result).toBe(testCase.output);
  });
});

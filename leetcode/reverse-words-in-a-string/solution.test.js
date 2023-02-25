const reverseWords = require('./solution');

describe('Reverse Words In A String', () => {
  const testCases = [
    {
      input: 'the sky is blue',
      output: 'blue is sky the',
    },
    {
      input: '  hello world!  ',
      output: 'world! hello',
    },
    {
      input: 'a good   example',
      output: 'example good a',
    },
    {
      input: '  Bob    Loves  Alice   ',
      output: 'Alice Loves Bob',
    },
  ];

  it('should return a string type', () => {
    const result = reverseWords('the sky is blue');
    expect(typeof result).toBe('string');
  });

  it.each(testCases)('should return $output', (testCase) => {
    const result = reverseWords(testCase.input);
    expect(result).toBe(testCase.output);
  });
});

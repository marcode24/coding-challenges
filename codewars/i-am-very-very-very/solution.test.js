const iam = require('./solution');

describe('I Am Very Very Very', () => {
  const testCases = [
    {
      input: iam('happy'),
      output: 'I am happy',
    },
    {
      input: iam('excited'),
      output: 'I am excited',
    },
    {
      input: iam()('scared'),
      output: 'I am very scared',
    },
    {
      input: iam()()('interested'),
      output: 'I am very very interested',
    },
    {
      input: iam()()('tall and ') + iam()('funny'),
      output: 'I am very very tall and I am very funny',
    },
    {
      input: iam()()()()('tall and ')
        + iam()()()()()()()('big and ')
        + iam()()()()()('tall'),
      output: 'I am very very very very tall and I am very '
        + 'very very very very very very big and I am very '
        + 'very very very very tall',
    },
  ];

  it('should return a string type', () => {
    expect(typeof iam('happy')).toBe('string');
  });

  it.each(testCases)('should return => $output', (testCase) => {
    expect(testCase.input).toBe(testCase.output);
  });
});

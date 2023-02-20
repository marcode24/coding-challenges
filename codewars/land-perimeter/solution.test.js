const landPerimeter = require('./solution');

describe('Land Perimeter', () => {
  const testCases = [
    {
      input: ['OXOOOX', 'OXOXOO', 'XXOOOX', 'OXXXOO', 'OOXOOX', 'OXOOOO',
        'OOXOOX', 'OOXOOO', 'OXOOOO', 'OXOOXX'],
      output: 60,
    },
    {
      input: ['OXOOO', 'OOXXX', 'OXXOO', 'XOOOO', 'XOOOO', 'XXXOO', 'XOXOO',
        'OOOXO', 'OXOOX', 'XOOOO', 'OOOXO'],
      output: 52,
    },
    {
      input: ['XXXXXOOO', 'OOXOOOOO', 'OOOOOOXO', 'XXXOOOXO', 'OXOXXOOX'],
      output: 40,
    },
    {
      input: ['XOOOXOO', 'OXOOOOO', 'XOXOXOO', 'OXOXXOO', 'OOOOOXX', 'OOOXOXX',
        'XXXXOXO'],
      output: 54,
    },
    {
      input: ['OOOOXO', 'XOXOOX', 'XXOXOX', 'XOXOOO', 'OOOOOO', 'OOOXOO', 'OOXXOO'],
      output: 40,
    },
  ];

  it('should return a string type', () => {
    expect(typeof landPerimeter(testCases[0].input)).toBe('string');
  });

  it.each(testCases)('should return $output as perimeter', (testCase) => {
    expect(landPerimeter(testCase.input))
      .toBe(`Total land perimeter: ${testCase.output}`);
  });
});

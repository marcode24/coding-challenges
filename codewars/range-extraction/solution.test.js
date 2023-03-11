const solution = require('./solution');

describe('Range extraction', () => {
  const testCases = [
    {
      input: [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20],
      output: '-6,-3-1,3-5,7-11,14,15,17-20',
    },
    {
      input: [-3, -2, -1, 2, 10, 15, 16, 18, 19, 20],
      output: '-3--1,2,10,15,16,18-20',
    },
    {
      input: [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17,
        18, 19, 20],
      output: '-10--8,-6,-3-1,3-5,7-11,14,15,17-20',
    },
    {
      input: [-3, -2, -1, 2, 10, 15, 16, 18, 19, 20, 22, 23],
      output: '-3--1,2,10,15,16,18-20,22,23',
    },
  ];

  it('should return a string', () => {
    expect(typeof solution([-1, 0, 1, 2, 6, 7, 9])).toBe('string');
  });

  it.each(testCases)('should return the correct output', (testCase) => {
    expect(solution(testCase.input)).toBe(testCase.output);
  });
});

const createPhoneNumber = require('./solution');

describe('Create phone number', () => {
  const testCases = [
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      output: '(123) 456-7890',
    },
    {
      input: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      output: '(111) 111-1111',
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      output: '(123) 456-7890',
    },
  ];

  it('should return a string type', () => {
    expect(typeof createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('string');
  });

  it.each(testCases)('should return the correct output', ({ input, output }) => {
    expect(createPhoneNumber(input)).toBe(output);
  });
});

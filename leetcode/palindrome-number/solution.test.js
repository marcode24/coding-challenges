const { isPalindrome, isPalindrome2 } = require('./solution');

describe('Palindrome Number', () => {
  const testCases = [
    {
      input: 121,
      output: true,
    },
    {
      input: -121,
      output: false,
    },
    {
      input: 10,
      output: false,
    },
    {
      input: -101,
      output: false,
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof isPalindrome(121)).toBe('boolean');
    expect(typeof isPalindrome2(121)).toBe('boolean');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(isPalindrome(testCase.input)).toBe(testCase.output);
    expect(isPalindrome2(testCase.input)).toBe(testCase.output);
  });
});

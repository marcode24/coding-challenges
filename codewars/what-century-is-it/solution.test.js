const whatCentury = require('./solution');

describe('What Century Is It', () => {
  const testCases = [
    {
      input: 2023,
      output: '21st',
    },
    {
      input: 2000,
      output: '20th',
    },
    {
      input: 1901,
      output: '20th',
    },
    {
      input: 1899,
      output: '19th',
    },
    {
      input: '1999',
      output: '20th',
    },
    {
      input: '2011',
      output: '21st',
    },
    {
      input: '2154',
      output: '22nd',
    },
    {
      input: '2259',
      output: '23rd',
    },
    {
      input: '1234',
      output: '13th',
    },
    {
      input: '1023',
      output: '11th',
    },
    {
      input: '2000',
      output: '20th',
    },
  ];

  it('should return a string type', () => {
    expect(typeof whatCentury(2023)).toBe('string');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(whatCentury(testCase.input)).toBe(testCase.output);
  });
});

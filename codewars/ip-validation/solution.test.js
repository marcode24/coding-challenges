const isValidIP = require('./solution');

describe('IP Validation', () => {
  const testCases = [
    {
      input: '0.0.0.0',
      output: true,
    },
    {
      input: '12.255.56.1',
      output: true,
    },
    {
      input: '137.255.156.100',
      output: true,
    },
    {
      input: '',
      output: false,
    },
    {
      input: 'abc.def.ghi.jkl',
      output: false,
    },
    {
      input: '123.456.789.0',
      output: false,
    },
    {
      input: '12.34.56',
      output: false,
    },
    {
      input: '01.02.03.04',
      output: false,
    },
    {
      input: '256.1.2.3',
      output: false,
    },
    {
      input: '1.2.3.4.5',
      output: false,
    },
    {
      input: '123,45,67,89',
      output: false,
    },
    {
      input: '1e0.1e1.1e2.2e2',
      output: false,
    },
    {
      input: ' 1.2.3.4',
      output: false,
    },
    {
      input: '1.2.3.4 ',
      output: false,
    },
    {
      input: '12.34.56.-7',
      output: false,
    },
    {
      input: '1.2.3.4\n',
      output: false,
    },
    {
      input: '\n1.2.3.4',
      output: false,
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof isValidIP('0.0.0.0')).toBe('boolean');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(isValidIP(testCase.input)).toBe(testCase.output);
  });
});

const GrεεκL33t = require('./solution');

describe('Leet Greek Case', () => {
  const testCases = [
    {
      input: 'codewars',
      output: 'cθδεωαπs',
    },
    {
      input: 'kata',
      output: 'κατα',
    },
    {
      input: 'kumite',
      output: 'κμmιτε',
    },
    {
      input: 'greekleet',
      output: 'gπεεκlεετ',
    },
  ];

  it('should return a string type', () => {
    expect(typeof GrεεκL33t('hola')).toBe('string');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(GrεεκL33t(testCase.input)).toBe(testCase.output);
  });
});

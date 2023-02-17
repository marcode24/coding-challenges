const swap = require('./solution');

describe('Changing letters', () => {
  const testCases = [
    {
      input: '',
      output: '',
    },
    {
      input: '   @@@',
      output: '   @@@',
    },
    {
      input: 'HelloWorld!',
      output: 'HEllOWOrld!',
    },
    {
      input: 'Sunday',
      output: 'SUndAy',
    },
    {
      input: 'Codewars',
      output: 'COdEwArs',
    },
    {
      input: 'Monday',
      output: 'MOndAy',
    },
    {
      input: 'Friday',
      output: 'FrIdAy',
    },
    {
      input: 'abracadabra',
      output: 'AbrAcAdAbrA',
    },
    {
      input: 'AbrAcAdAbrA',
      output: 'AbrAcAdAbrA',
    },
    {
      input: 'ABRACADABRA',
      output: 'ABRACADABRA',
    },
    {
      input: 'aBRaCaDaBRa',
      output: 'ABRACADABRA',
    },
  ];

  it('should return a string type', () => {
    expect(typeof swap('Did it work?')).toBe('string');
  });

  it.each(testCases)('should return the correct output', ({ input, output }) => {
    expect(swap(input)).toBe(output);
  });
});

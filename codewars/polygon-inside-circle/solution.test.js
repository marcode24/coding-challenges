const areaOfPolygonInsideCircle = require('./solution');

describe('Area of polygon inside circle', () => {
  const testCases = [
    {
      input: [5.8, 7],
      output: 92.053,
    },
    {
      input: [3, 3],
      output: 11.691,
    },
    {
      input: [4, 5],
      output: 38.042,
    },
    {
      input: [2, 4],
      output: 8,
    },
    {
      input: [2.5, 5],
      output: 14.86,
    },
  ];

  it('should return a number type', () => {
    expect(typeof areaOfPolygonInsideCircle(5.8, 7)).toBe('number');
  });

  it.each(testCases)('should return the correct output', ({ input, output }) => {
    expect(areaOfPolygonInsideCircle(...input)).toBe(output);
  });
});

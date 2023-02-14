const sum = require('./index');

describe('Tests', () => {
  it('test', () => {
    expect(sum(1, 2)).toStrictEqual(3);
  });
});

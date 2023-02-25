const mergeTwoLists = require('./solution');

describe('Merge Two Sorted Lists', () => {
  const testCases = [
    {
      input: [
        {
          val: 1,
          next: {
            val: 2,
            next: {
              val: 4,
              next: null,
            },
          },
        },
        {
          val: 1,
          next: {
            val: 3,
            next: {
              val: 4,
              next: null,
            },
          },
        },
      ],
      output: {
        val: 1,
        next: {
          val: 1,
          next: {
            val: 2,
            next: {
              val: 3,
              next: {
                val: 4,
                next: {
                  val: 4,
                  next: null,
                },
              },
            },
          },
        },
      },
    },
    {
      input: [
        {
          val: null,
          next: null,
        },
        {
          val: 0,
          next: null,
        },
      ],
      output: {
        next: {
          next: null,
          val: null,
        },
        val: 0,
      },
    },
    {
      input: [
        {
          val: null,
          next: null,
        },
        {
          val: null,
          next: null,
        },
      ],
      output: {
        next: {
          next: null,
          val: null,
        },
        val: null,
      },
    },
  ];

  it('should return an object type ', () => {
    const result = mergeTwoLists(
      {
        val: null,
        next: null,
      },
      {
        val: null,
        next: null,
      },
    );
    expect(typeof result).toBe('object');
  });

  it.each(testCases)('should return a merged sorted list', (testCase) => {
    const result = mergeTwoLists(testCase.input[0], testCase.input[1]);
    expect(result).toEqual(testCase.output);
  });
});

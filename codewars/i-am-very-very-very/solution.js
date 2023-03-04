function iam(input) {
  if (input) {
    return `I am ${input}`;
  }
  let counter = 0;
  return function inner(nextInput) {
    counter++;
    if (nextInput) {
      return `I am ${'very '.repeat(counter)}${nextInput}`;
    }
    return inner;
  };
}

module.exports = iam;

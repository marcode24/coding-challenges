const reverseWords = (s) => s
  .trim()
  .replace(/\s+/g, ' ')
  .split(' ')
  .reverse()
  .join(' ');

module.exports = reverseWords;

// solve without converting to string
const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }

  let reverse = 0;
  const original = x;

  while (x > 0) {
    reverse = (reverse * 10) + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reverse;
};

// solve by converting to string
const isPalindrome2 = (x) => x.toString() === [...x.toString()].reverse().join('');

module.exports = {
  isPalindrome,
  isPalindrome2,
};
